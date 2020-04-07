import React from 'react';
import Cabecalho from './cabecalho/Cabecalho';
import Foto from './foto/Foto';
import Acoes from './acoes/Acoes';
import Legenda from './legenda/Legenda';

export default class Post extends React.Component {
    render() {
        const foto = this.props.foto;
        return (
            <>
                <Cabecalho src={foto.profilePic} usuario={foto.user} />
                <Foto src={foto.picSrc} />
                <Acoes />
                <Legenda legenda={foto.picLegend} usuario={foto.user} />
            </>
        );
    }
}