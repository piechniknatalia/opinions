import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GiveAnOpinion() {
    const initialValues = {
        productName: "",
        username: "",
        opinionText:""
    };

    const validationSchema = Yup.object().shape({
        productName:Yup.string().oneOf(['soderhamn', 'metod', 'pax', 'malm', 'hemnes'], "Oceniany produkt musi być jednym z: soderhamn, metod, pax, malm, hemnes"),
        username:Yup.string().min(2, "Imię powinno mieć więcej niż 2 znaki").max(15, "Imię powinno mieć mniej niż 15 znaków").required("Dodaj imię"),
        opinionText:Yup.string().required("Wyraź opinię")
    });
    let navigate = useNavigate();
    const onSubmit = (data) => {
        axios.post("http://localhost:4001/opinions", data).then((response) => {
            navigate("/");
        });
    };

    return <div className="form">
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
            <Form className="form">
                <ErrorMessage name='username' component='span'/>
                <Field
                    autoComplete="off"
                    id="input"
                    name="username"
                    placeholder="(Imię)"/>
                <ErrorMessage name='productName' component='span'/>
                <Field
                    autoComplete="off"
                    id="input"
                    name="productName"
                    placeholder="(Nazwa Produktu)"/>
                <ErrorMessage name='opinionText' component='span'/>
                <Field
                    autoComplete="off"
                    id="input"
                    name="opinionText"
                    placeholder="(Opinia)"/>
                <button className="button" type="submit">Wyślij</button>
            </Form>
        </Formik>
    </div>;
}

export default GiveAnOpinion