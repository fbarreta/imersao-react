import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videoRepository from './../../../repositories/videos';
import categoriaRepository from './../../../repositories/categorias';

function CadastroVideo() {
    const defaultEmpty = {
        titulo: '',
        url: '',
        categoria: '',
    };
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const { handleChange, values, clearForm } = useForm(defaultEmpty);
    useEffect(() => {
        categoriaRepository.getAllWithVideos().then((resp) => {
            setCategorias(resp);
        });
    }, []);

    console.log(categorias);

    return(
        <PageDefault>
            <h1>Cadastro de video</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                const categoria = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });
                videoRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoria.id,
                }).then(() => {
                    clearForm(defaultEmpty);
                    history.push('/'); 
                });
            }}>
                <FormField
                    label='Nome do Video'
                    type='text'
                    name='titulo'
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label='Url'
                    type='text'
                    name='url'
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label='Categoria'
                    type='text'
                    name='categoria'
                    value={values.categoria}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
            
            <Link to="/cadastro/categoria">
                Cadastro de categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;
