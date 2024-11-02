import React from 'react';
import { Platform, Text,StyleSheet } from 'react-native';

import defaultStyles from  '../config/styles';

export default function AppText({children,style,...otherProps}) {
    return (
        <Text {...otherProps} style={[defaultStyles.text,style]}>
            {children}
        </Text>
    );
}

