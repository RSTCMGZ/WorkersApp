function AddWorker() {
  return (
    <form className="flex flex-col gap-y-2">
      <label htmlFor="name" className="font-medium">
        Çalışan İsmi
      </label>
      <input
        type="text"
        className="max-w-[40rem] w-full mx-auto border p-2"
        placeholder="Çalışan İsmi Yazınız."
        id="name"
      />
      <label htmlFor="wage" className="font-medium">
        Maaş Miktarı
      </label>
      <input
        type="text"
        className="max-w-[40rem] w-full mx-auto border p-2"
        placeholder="Maaş  Miktarı Giriniz."
        id="wage"
      />
      <button className="p-2 text-lg mt-2 bg-teal-700 text-white" type="submit">
        Ekle
      </button>
    </form>
  );
}

export default AddWorker;
