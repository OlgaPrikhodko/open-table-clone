import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import ReservationForm from "./components/ReservationForm";

export default function Reserve() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />

        <div className="h-screen border-t">
          <div className="m-auto w-3/5 py-9">
            <Header />
            <ReservationForm />
          </div>
        </div>
      </main>
    </main>
  );
}
