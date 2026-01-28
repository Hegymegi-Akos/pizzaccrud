import { useNavigate } from "react-router-dom";
import './Pizzak.css'

export const UjPizza = () => {

    const navigate = useNavigate();
    return (
       <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új pizza</h2>
            <form
            onSubmit={(event) => {
                //ez a két sor azért kell, mert szükséges megállítani a form-ot,
                // hogy ne küldje újra az adatokat a böngészőnek, mert az nem jó,
                //hanem itt nekünk az kívánatos, hogy elküldje az adatokat a backend-nek
            event.persist();
            event.preventDefault();
            fetch(`https://pizza.sulla.hu/pizza`, {
                method: "POST",
                //bekerült ez az "újítás", ami miatt nem ment:
                headers: {
                    'Content-Type': 'application/json',
                },
                // itt figyeljetek, mert BAL oldalra kell amit a backend-be írunk,
                //míg jobb oldalra az űrlap-elemek pontos nevei kerültek, kicsivel!!!

                body: JSON.stringify({
                    name: event.target.elements.name.value,
                    image_url: event.target.elements.kepurl.value,
                }),
            })
            // ha kész, visszadob a főoldalra! Return-öl a backend-ről minden infót!
            .then(() =>
            {
                navigate("/pizzak");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Pizza név:</label>
                <div className="col-sm-9">
                <input type="text" name="name" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                <div className="col-sm-9">
                <input type="text" name="kepurl" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button> &nbsp;&nbsp;&nbsp; <button type="reset" className="btn btn-danger">
                Mégsem
            </button>
            </form>
        </div>
    );
}
