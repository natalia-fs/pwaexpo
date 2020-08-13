import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Repo{
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    clone_url: string;
    language: string;
}

const Repos: React.FC = () => {
    const noDescription = 'Esse repo ainda não tem descrição, mas provavelmente tem um README legal, é só acessar no github.'
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
            fetch('https://api.github.com/users/natalia-fs/repos').then(response => {
            response.json().then(data => {
                console.log(data)
                setRepos(data)
            })
        })
        
    }, []);

    return (
        <>
        <View style={{marginTop: 24, flexDirection: 'column-reverse',}}>
            {
                repos.map((repo: Repo) => {
                    return(
                        <ScrollView
                            contentContainerStyle={{
                            paddingHorizontal: 16,
                            paddingBottom: 16
                        }}
                        >
                            <View style={styles.container} key={repo.full_name}>
                                <Text style={styles.name}>{repo.full_name}</Text>
                                <Text style={styles.language}>{repo.language ? repo.language : ''}</Text>
                                <Text style={styles.description}>{repo.description ? repo.description : noDescription}</Text>
                            </View>
                        </ScrollView>
                    )})
            }
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 8,
        backgroundColor: '#007aff6e',
        borderRadius: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 16,
        marginTop: 16,
    },
    language: {
        fontSize: 12,
    }
})

export default Repos;