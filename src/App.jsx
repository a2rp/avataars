import { ToastContainer } from "react-toastify";
import RandomAvataars from "./randomAvataar";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <RandomAvataars />

            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
