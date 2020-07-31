import React, { useEffect, useState } from 'react';
import BannerMain from '../../../components/BannerMain';
import Carousel from '../../../components/Carousel';
import PageDefault from '../../../components/PageDefault/index.js';
import categoriaRepository from '../../../repositories/categorias';

function App() {

  const [startData, setStartData] = useState([]);
   
  useEffect(() => {
    categoriaRepository.getAllWithVideos().then((resp) => {
      console.log(resp);
      setStartData(resp);
  });
  }, []);

  return (
    <div>
      <PageDefault paddingAll={0}>
        {startData.length === 0 && (<div>Loading...</div>)}

        {startData.length >= 1 && (
          <>
            <BannerMain
              videoTitle={startData[0].videos[0].titulo}
              url={startData[0].videos[0].url}
              videoDescription={startData[0].link_extra.text}
            />

            {
              startData.map((categoria, index) => {
                  return(
                    <Carousel
                      key={index}
                      category={categoria}
                    />
                  );
              })
            }
          </>
        )}

        {/*
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que e frontend ..."}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        />
        */}
      </PageDefault>
    </div>
  );
}

export default App;
