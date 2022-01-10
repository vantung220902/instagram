import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        flex: 1,
        backgroundColor: 'white'
    },
    app: {
        width: '100%',
        height: '100%',
        marginTop: 4,
    },
    items: {
        flexDirection: 'column',
        marginTop: 100,
        alignItems: "center",
        justifyContent: "space-between",
        height: 200,
    },
    heading: {
        fontSize: 42,
        fontFamily: 'DancingScript',
    },
    line: {
        height: 2,
        backgroundColor: '#eeeeee',
        width: '35%',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#6eb4f3',
        fontSize:16
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        height: 100,
        width: '84%',
        marginTop:60
    },
    mt40: {
        marginTop:40
    }
});