import { useState, Fragment, useRef } from "react";
import Button from "../UL/Button";
import Card from "../UL/Card";
import ErrorModal from "../UL/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";
function AddWorker(props) {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();

  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen Bir İsim Giriniz.",
      });
      return;
    }
    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className={"mt-10"}>
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan İsmi Yazınız."
            id="name"
            ref={nameInputRef}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş  Miktarı Giriniz."
            id="wage"
            ref={wageInputRef}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>
    // <Wrapper>
    //   {error && <ErrorModal onConfirm={errorHandler} error={error} />}
    //   <Card className={"mt-10"}>
    //     <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
    //       <label htmlFor="name" className="font-medium">
    //         Çalışan İsmi
    //       </label>
    //       <input
    //         type="text"
    //         className="max-w-[40rem] w-full mx-auto border p-2"
    //         placeholder="Çalışan İsmi Yazınız."
    //         id="name"
    //         value={enteredWorkerName}
    //         onChange={(e) => setEnteredWorkerName(e.target.value)}
    //       />
    //       <label htmlFor="wage" className="font-medium">
    //         Maaş Miktarı
    //       </label>
    //       <input
    //         type="number"
    //         className="max-w-[40rem] w-full mx-auto border p-2"
    //         placeholder="Maaş  Miktarı Giriniz."
    //         id="wage"
    //         value={enteredWage}
    //         onChange={(e) => setEnteredWage(e.target.value)}
    //       />
    //       <Button className="mt-2" type="submit">
    //         Ekle
    //       </Button>
    //     </form>
    //   </Card>
    // </Wrapper>
  );
}

export default AddWorker;
