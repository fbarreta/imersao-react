import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriaRepository from './../../../repositories/categorias';

function CadastroCategoria() {
    const defaultEmpty = {
        nome: '',
        titulo: '',
        cor: '',
    };

    const { handleChange, values, clearForm } = useForm(defaultEmpty);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        categoriaRepository.getAllWithVideos().then((resp) => {
            setCategorias([...resp]);
        });
    }, []);

    return(
        <PageDefault>
            <h1>Cadastro de categoria: {values.titulo}</h1>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                clearForm(defaultEmpty);
            }}>
                <FormField
                    label='Nome da Categoria'
                    type='text'
                    name='nome'
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label='Descricao'
                    type='textarea'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label='Cor'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
            {categorias.length === 0 && (
                <div>Loading ...</div>
            )}
            <ul>
                {
                categorias.map((categoria, index) => {
                    return(
                        <li key={index}>{categoria.titulo}</li>
                    );
                })
                }
            </ul>
            <Link to="/">
                Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
