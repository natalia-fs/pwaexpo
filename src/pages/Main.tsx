import React, { useState, useEffect, } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface User{
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    repos_url: string;
    company: string;
}


const Main: React.FC = () => {

    const [user, setUser] = useState<User>(
        {
            login: '',
            avatar_url: '',
            html_url: '',
            name: '',
            repos_url: '',
            company: ''
        }
    );
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/natalia-fs').then(response => {
            response.json().then(data => {
                console.log(data)
                setUser(data)
            })
        })
    }, []);

    return(
        <>
            <View style={styles.container}>
                <Image style={styles.avatar} source={{uri: user.avatar_url}} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.company}>WebDev | {user.company}</Text>
                <Text style={styles.login}>Github: {user.login}</Text>
                
            </View>            
        </>
     );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    avatar: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center'

    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        width: '100%',
    },
    company: {
        textAlign: 'center',
        color: '#888',
        marginBottom: 8,
        fontSize: 16,
    },
    login: {
        textAlign: 'center',
        fontSize: 16,
    }
})

export default Main;