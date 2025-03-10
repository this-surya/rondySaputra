import { useState } from "react";

const FormToSpreadsheet = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    const scriptURL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    
    try {
      const response = await fetch(scriptURL, { method: "POST", body: formDataToSend });
      if (response.ok) {
        setMessage("Data berhasil dikirim!");
        setFormData({ name: "", email: "" });
      } else {
        setMessage("Gagal mengirim data.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan, coba lagi nanti.");
    }
    
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Formulir Pendaftaran</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
      {message && <p className="text-center text-sm mt-2">{message}</p>}
    </div>
  );
};

export default FormToSpreadsheet;
