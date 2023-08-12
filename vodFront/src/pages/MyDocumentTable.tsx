import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderCollapse: 'collapse'
    },
    row: {
        flexDirection: 'row',

    },
    cell: {
        flexGrow: 1,
        flexBasis: '16.67%',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 5,

    },
    cell2: {
        flexGrow: 1,
        flexBasis: '16.67%',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: 5,
    },
    cell3: {
        flexGrow: 1,
        flexBasis: '16.67%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        border: '1px solid black',
        padding: 5,
    },
    blackText: {
        color: '#000',
        fontSize: 12,
    },
    doubleHeight: {
        height: '200%', // to simulate rowspan=2
        backgroundColor: "white",
        border: '1px solid black',
    },
    doubleWidth: {
        flexBasis: '33.34%', // to simulate colspan=2

    },
    tripleWidth: {
        flexBasis: '50%', // to simulate colspan=3
        border: '1px solid black',
        backgroundColor: "white",
    },
    content: {
        fontSize: 12,
        marginBottom: 10,
    },
});

const MyDocumentTable = () => (

    <View style={styles.table}>
        <View style={styles.row}>
            <View style={[styles.cell, styles.doubleHeight]}>
                <Text style={styles.blackText}>구분</Text>
            </View>
            <View style={[styles.cell, styles.doubleHeight]}>
                <Text style={styles.blackText}>지원금</Text>
            </View>
            <View style={[styles.cell, styles.tripleWidth]}>
                <Text style={styles.blackText}>민간부담금</Text>
            </View>
            <View style={[styles.cell, styles.doubleHeight]}>
                <Text style={styles.blackText}>합계</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell3}>
                <Text style={styles.blackText}>현금</Text>
            </View>
            <View style={styles.cell3}>
                <Text style={styles.blackText}>현물</Text>
            </View>
            <View style={styles.cell3}>
                <Text style={styles.blackText}>소계</Text>
            </View>
            <View style={styles.cell}><Text style={styles.blackText}>&nbsp;</Text></View>
        </View>
        <View style={styles.row}>
            <View style={styles.cell2}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell2}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell2}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell2}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell2}><Text style={styles.blackText}>&nbsp;</Text></View>
            <View style={styles.cell2}><Text style={styles.blackText}>&nbsp;</Text></View>
        </View>
    </View>
);

export default MyDocumentTable;
