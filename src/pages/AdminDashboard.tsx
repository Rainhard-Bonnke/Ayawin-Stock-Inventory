import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Upload,
  Image as ImageIcon,
  Video,
  Trash2,
  LogOut,
  Plus,
  FileText,
  Loader2,
  ExternalLink
} from "lucide-react";

const AdminDashboard = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [items, setItems] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
      }
      setSession(session);
    });

    fetchGalleryItems();
  }, [navigate]);

  const fetchGalleryItems = async () => {
    setLoading(true);
    try {
      // Note: This assumes a table 'gallery_items' exists. 
      // If it doesn't, this will fail gracefully.
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Gallery items table not found or error:", error.message);
        return;
      }
      setItems(data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
    toast.success("Logged out successfully");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // 1. Upload to Storage
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("gallery")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from("gallery")
        .getPublicUrl(filePath);

      // 3. Save to Dashboard Database
      const { error: dbError } = await supabase
        .from("gallery_items")
        .insert([
          {
            name,
            description,
            url: publicUrl,
            type: file.type.startsWith("video") ? "video" : "image",
            category,
          },
        ]);

      if (dbError) {
        toast.warning("File uploaded to storage, but metadata could not be saved to DB. (Table 'gallery_items' might be missing)");
      } else {
        toast.success("File uploaded and saved successfully!");
      }

      // Reset form
      setFile(null);
      setName("");
      setDescription("");
      fetchGalleryItems();
    } catch (error: any) {
      toast.error(error.message || "Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, url: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      // 1. Delete from DB
      const { error: dbError } = await supabase
        .from("gallery_items")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      // 2. Optional: Delete from storage (parsing from URL)
      // For now, we'll just remove the record.

      toast.success("Item deleted");
      fetchGalleryItems();
    } catch (error: any) {
      toast.error(error.message || "Error deleting item");
    }
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-950 text-white py-6 shadow-xl sticky top-0 z-50 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/uploads/Logoo.jpeg" className="w-10 h-10 rounded-full" alt="Logo" />
            <h1 className="text-xl font-black uppercase tracking-tighter">Ayawin Admin</h1>
          </div>
          <Button variant="ghost" className="text-slate-400 hover:text-white" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <Card className="rounded-3xl border-slate-200 shadow-xl overflow-hidden sticky top-32">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" /> New Upload
                </CardTitle>
                <CardDescription className="text-blue-100">Add a new photo or video to the gallery.</CardDescription>
              </CardHeader>
              <CardContent className="pt-8 px-6 pb-10">
                <form onSubmit={handleUpload} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">File Name</label>
                    <Input
                      placeholder="e.g. Stock Audit in Nairobi"
                      className="rounded-xl border-slate-200"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Description</label>
                    <Textarea
                      placeholder="Describe the work shown..."
                      className="rounded-xl border-slate-200 min-h-[100px]"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Category</label>
                    <Input
                      placeholder="e.g. Tech Solutions"
                      className="rounded-xl border-slate-200"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Media File</label>
                    <div className="relative group">
                      <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="h-24 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                        {file ? (
                          <span className="text-blue-600 font-bold text-sm truncate px-4">{file.name}</span>
                        ) : (
                          <>
                            <Upload className="w-6 h-6 text-slate-400 mb-2" />
                            <span className="text-slate-500 text-sm font-medium">Click to select file</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full h-12 bg-blue-600 hover:bg-black text-white font-black rounded-xl transition-all"
                    disabled={uploading}
                    type="submit"
                  >
                    {uploading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Confirm & Upload"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Manage Gallery</h2>
                <p className="text-slate-500 font-medium">Preview and edit your published media items.</p>
              </div>
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex gap-4 text-sm font-bold px-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <ImageIcon className="w-4 h-4" /> {items.filter(i => i.type === 'image').length} Images
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Video className="w-4 h-4" /> {items.filter(i => i.type === 'video').length} Videos
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                <div className="col-span-2 h-64 flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                </div>
              ) : items.length === 0 ? (
                <div className="col-span-2 h-64 border-2 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center text-slate-400">
                  <FileText className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-bold">No gallery items found in database</p>
                  <p className="text-sm">Try uploading your first file above</p>
                </div>
              ) : (
                items.map((item) => (
                  <Card key={item.id} className="rounded-[2.5rem] border-slate-100 shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                    <div className="relative aspect-video">
                      {item.type === 'video' ? (
                        <video className="w-full h-full object-cover">
                          <source src={item.url} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={item.url} className="w-full h-full object-cover" alt={item.name} />
                      )}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-slate-900 shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleDelete(item.id, item.url)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-red-600 shadow-lg hover:bg-red-600 hover:text-white transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                        {item.category}
                      </span>
                      <h4 className="text-xl font-bold text-slate-950 mb-2 truncate">{item.name}</h4>
                      <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
