import Button from "../UL/Button";
import Card from "../UL/Card";

function AddWorker() {
  return (
    <Card className={"mt-10"}>
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
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş  Miktarı Giriniz."
          id="wage"
        />
        <Button className="mt-2" type="submit">
          Ekle
        </Button>
      </form>
    </Card>
  );
}

export default AddWorker;
