import React, { useCallback, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Story from '../Story';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListStories } from '../../../actions/story';
const ListStories = (props) => {
    useEffect(()=> {
        const { getStories } = props;
        getStories();
    }, []);
    const { stories } = props;
    console.log(stories);
    return (
        <View style={styles.container}>
            <FlatList data={stories}
                initialNumToRender={7}
                renderItem={useCallback(({ item, index }) => {
                    return (
                        <Story item={item}
                            key={index} index={index}
                        />
                    )
                })} />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});
const mapStateToProps = (state) => {
    return {
        stories: state.story.stories
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStories: bindActionCreators(getListStories, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListStories);
