import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({searchTerm, onSearchTermChange, onSearchTermSubmit}) => {
    return (
        <View style={styles.searchBackground}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.searchInput}
                placeholder='Search'
                value={searchTerm}
                onChangeText={newSearchTerm => onSearchTermChange(newSearchTerm)}
                onEndEditing={onSearchTermSubmit}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBackground: {
        backgroundColor: '#dcdee0',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10
    },
    searchInput: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar