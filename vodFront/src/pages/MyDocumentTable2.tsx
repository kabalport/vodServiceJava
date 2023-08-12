import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        marginTop: 30,
        fontSize: 30,
        padding: 20,
        fontFamily: 'Noto Sans KR',
    },
    header: {
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    agreementItem: {
        fontSize: 16,
        marginBottom: 5
    },
    table: {
        width: "100%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
    },
    tableRow: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomWidth: 1
    },

    tableColHeader: {
        width: "33.33%", // 열의 폭을 1/3로 수정
        borderRightWidth: 1,
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    tableCol: {
        width: "33.33%", // 열의 폭을 1/3로 수정
        borderRightWidth: 1,
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        justifyContent: "center",
        alignItems: "center"
    },
    // tableColHeader: {
    //     width: "25%",
    //     borderRightWidth: 1,
    //     borderStyle: "solid",
    //     borderColor: "#bfbfbf",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    // tableCol: {
    //     width: "25%",
    //     borderRightWidth: 1,
    //     borderStyle: "solid",
    //     borderColor: "#bfbfbf",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    tableCellHeader: {
        margin: "auto",
        fontSize: 12,
        fontWeight: "bold"
    },
    tableCell: {
        margin: "auto",
        fontSize: 12
    }
});

const MyDocumentTable = () => (
    <View style={styles.table}>
        <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>기업명</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>사업자등록번호</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>대표자명</Text>
            </View>
        </View>
        <View style={styles.tableRow}>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>&nbsp;</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>ss</Text> {/* 데이터 삽입 */}
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text> {/* 데이터 삽입 */}
            </View>
        </View>
    </View>
);

export default MyDocumentTable;