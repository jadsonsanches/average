import React from 'react'
import { View } from 'react-native';

import styles from './styles';

import { TituloBreadcrumb } from './styles'

export default function Breadcrumb({Titulo}) {
    return (
        <View style={styles.breadcrumb}>
            <TituloBreadcrumb>{Titulo}</TituloBreadcrumb>
        </View>
    )
}