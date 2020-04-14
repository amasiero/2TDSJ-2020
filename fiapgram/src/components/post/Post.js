import React from 'react';
import Cabecalho from './cabecalho/Cabecalho';
import Foto from './foto/Foto';
import Acoes from './acoes/Acoes';
import Legenda from './legenda/Legenda';
import Comentarios from './comentarios/Comentarios';
import Input from './input/Input';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { picture : this.props.picture };

        this.handleComments = this.handleComments.bind(this);
    }

    handleLike() {
        const { picture } = this.state;
        picture.picLiked = !picture.picLiked;

        if(picture.picLiked) {
            picture.picLikes.push('meuusuario');
        } else {
            const temp = picture.picLikes.filter(item => item !== 'meuusuario');
            picture.picLikes = temp;
        }

        this.setState({ picture });
    }

    handleComments(input, comment) {
        const comments = [
            ...this.state.picture.picComments,
            {
                user: 'meuusuario',
                comment
            }
        ];

        const picture = {
            ...this.state.picture,
            picComments : comments
        };

        this.setState({ picture });
        input.clear();
    }

    render() {
        const { picture } = this.state;
        return (
            <>
                <Cabecalho src={picture.profilePic} usuario={picture.user} />
                <Foto src={picture.picSrc} />
                <Acoes like={picture.picLiked} likes={picture.picLikes} handleLike={() => this.handleLike()}/>
                <Legenda legenda={picture.picLegend} usuario={picture.user} />
                <Comentarios comments={picture.picComments} />
                <Input handleComments={this.handleComments}/>
            </>
        );
    }
}