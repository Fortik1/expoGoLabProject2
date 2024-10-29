import {RefreshControl, ScrollView, FlatList, View, StyleSheet} from "react-native";
import React, { useState } from "react";
import RenderItem from './render';

const langs = [
    {id: 1, lang: 'JavaScript', experience: 3, image: 'https://avatars.dzeninfra.ru/get-zen_doc/53963/pub_651011ddc419e8692e91c5dc_65101281d67f4c757ed51043/scale_1200'},
    {id: 2, lang: 'Python', experience: 1, image: 'https://o.quizlet.com/8TbHnZz4geK2cG2KORCz0A_b.png'},
    {id: 3, lang: 'SQL', experience: 1, image: 'https://media.istockphoto.com/id/1731611308/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-sql-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-sql-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.jpg?s=612x612&w=0&k=20&c=VRHupHbUeupqSY0IGjSCZFR_zGRWeYq7WXL5HEgc8bs='},
]

export default function Index() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefreshing = React.useCallback((): void => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.main}>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefreshing}/>
            }>
                <FlatList
                    data={langs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <RenderItem language={item.lang} experience={item.experience} image={item.image} />
                    )}
                />

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        topкr: 10,
        flex: 2,
        paddingTop: 20,
        backgroundColor: '#7a7a7a',
    },
});