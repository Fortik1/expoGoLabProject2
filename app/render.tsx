import  { View, Text, Image, StyleSheet } from 'react-native';

export default function RenderItem ({image, language, experience}) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: image }} />
            <View style={styles.textContainer}>
                <Text style={styles.language}>{language}</Text>
                <Text style={styles.experience}>Опыт: {experience} года</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    language: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experience: {
        fontSize: 12,
        color: '#666',
    },
});
