import {
    Dimensions,
    FlatList,
    PixelRatio,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default class Grid extends React.Component {
    static propTypes = {
        renderItem: PropTypes.func.isRequired,
        numColumns: PropTypes.number,
        itemMargin: PropTypes.number,
    };

    static defaultProps = {
        numColumns: 4,
        itemMargin: StyleSheet.hairlineWidth,
    }

    renderGridItem = (info) => {
        
        const { index } = info;
        const { renderItem, numColumns, itemMargin } = this.props;
        const { width } = Dimensions.get('window');

        const size = PixelRatio.roundToNearestPixel(
            (width - itemMargin * (numColumns - 1)) / numColumns,
        );

        const marginLeft = index % numColumns === 0 ? 0 : itemMargin;
        const marginTop = index < numColumns ? 0 : itemMargin;

        return renderItem({ ...info, size, marginLeft, marginTop });

    };

    render() {
        return (
            <FlatList {...this.props} renderItem={this.renderGridItem} />
        );
    }

}