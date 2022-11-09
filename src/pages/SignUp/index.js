import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import LeftSideImage from '../../components/LeftSideImage';
import NavigateLinks from '../../components/NavigateLinks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/storage';
import api from '../../services/api';
import './styles.css';
import ErrorMessage from '../../components/ErrorMessage';

export default function SignUp() {

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [formSignUp, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: ""
    });

    useEffect(() => {
        const token = getItem("token");

        if (token) {
            navigate("/dashboard");
        }
    }, []);

    const handleChangeInputValue = (e) => {
        setForm({ ...formSignUp, [e.target.name]: e.target.value });
    };

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();

        try {
            if (!formSignUp.name || !formSignUp.email || !formSignUp.password || !formSignUp.repeat_password) {
                setError("Please fill all the fields.")
                return;
            }

            if (formSignUp.password !== formSignUp.repeat_password) {
                setError("The password must match.");
                return;
            }

            const response = await api.post("/users", {
                name: formSignUp.name,
                email: formSignUp.email,
                password: formSignUp.password,
            });

            navigate("/sign-in");
        } catch (error) {
            setError(error.response.data.message);
        }
    };


    return (
        <div className="content-signup">
            <LeftSideImage />
            <div className='side-signup'>
                <NavigateLinks />
                <form className="form-signup" onSubmit={handleSubmitSignUp} autoComplete="off">
                    <CustomInput
                        name={"name"}
                        type={"name"}
                        value={formSignUp.name}
                        placeholder={"Name"}
                        handler={handleChangeInputValue}
                    />
                    <CustomInput
                        name={"email"}
                        type={"text"}
                        value={formSignUp.email}
                        placeholder={"E-mail"}
                        handler={handleChangeInputValue}
                    />
                    <CustomInput
                        name={"password"}
                        type={"password"}
                        value={formSignUp.password}
                        placeholder={"Password"}
                        handler={handleChangeInputValue}
                    />
                    <CustomInput
                        name={"repeat_password"}
                        type={"password"}
                        value={formSignUp.repeat_password}
                        placeholder={"Repeat-password"}
                        handler={handleChangeInputValue}
                    />
                    {error && <ErrorMessage message={error} />}
                    <CustomButton name={"Cadastrar"} />
                </form>
            </div>
        </div>
    )
};