import React from 'react';
import { Document, Text, Page, StyleSheet, View, Font, Image } from '@react-pdf/renderer'; // Image 추가
import notoSansKR from '../assets/fonts/NotoSansKR-Regular.otf';
import notoSansKR2 from '../assets/fonts/NotoSansKR-Bold.otf';
import MyDocumentTable from "./MyDocumentTable";
import stamp from "../assets/stamp_origin.png"
import MyDocumentTable2 from "./MyDocumentTable2";

// 한글 폰트 등록
Font.register({
    family: 'Noto Sans KR',
    src: notoSansKR
});
Font.register({
    family: 'Noto Sans KR Bold',
    src: notoSansKR2,
});


const styles = StyleSheet.create({
    page: {
        marginTop: 30,
        fontSize: 30,
        padding: 40,
        fontFamily: 'Noto Sans KR',
    },
    borderedSection: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10, // 내부 요소와 테두리 사이의 간격
        marginBottom: 10, // 테두리 박스 아래쪽의 간격
    },
    boldHeader: {
        fontFamily: 'Noto Sans KR Bold',
    },
    header: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 30,
    },
    content: {
        fontSize: 12,
        marginBottom: 10,
    },
    layout: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    underText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'right', // 오른쪽 정렬 추가
    },
    agreementItem: {
        fontSize: 12,
        marginBottom: 5
    },
    subText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5
    },
    signatureImage: {
        width: 70,
        height: 70,
        position: 'absolute',
        right: 0,
        top: -10,
    },
    tableText: {
        marginTop: 10,
        fontSize: 10,
        textAlign: "right",
        // marginBottom: 5
    },
    marginAdd:{
        marginTop: 20
    }

});

const MyDocument = () => (
    <Document>
        <Page style={styles.page}>
            <Text style={[styles.header, styles.boldHeader]}>협 약 서</Text>
            <Text style={styles.content}>인공지능산업융합사업단(이하 사업단)과 [기업명](이하 수행기업)은(는) [사업명] 과제를 추진하기 위하여 다음과 같이 협약을 체결한다.</Text>

            <View style={styles.borderedSection}>

            <Text style={styles.agreementItem}>□ 협약과제명 : [사업명]</Text>
            <Text style={styles.agreementItem}>□ 협약당사자</Text>
            <Text style={styles.agreementItem}>   · 사업단 : 인공지능산업융합사업단 (단장 김준하)</Text>
            <Text style={styles.agreementItem}>   · 수행기업 : [기업명] (직책 성명)</Text>
            <Text style={styles.agreementItem}>□ 협약기간 : [협약기간]</Text>
            <Text style={styles.agreementItem}>□ 협약금액 : [협약금액]</Text>

            <Text style={styles.tableText}>단위 : 원</Text>
            <MyDocumentTable />
                <View style={styles.marginAdd}></View>
                <Text style={styles.agreementItem}>□ 참여기업</Text>
                <MyDocumentTable2 />
            </View>
            <Text style={styles.subText}>[협약일]2000년 0월 0일</Text>

            <View style={styles.layout}>
                <View style={{flex: 1}}>
                    <Image source={stamp} style={styles.signatureImage} /> // 여기에 이미지 추가
                    <Text style={[styles.underText, styles.boldHeader]}>사업단 : 인공지능산업융합사업단</Text>
                    <Text style={[styles.underText, styles.boldHeader]}>단장 김 준 하</Text>

                </View>
                <View style={{flex: 1}}>
                    <Image source={stamp} style={styles.signatureImage} /> // 여기에 이미지 추가
                    <Text style={[styles.underText, styles.boldHeader]}>수행기관 : [수행기업명]</Text>
                    <Text style={[styles.underText, styles.boldHeader]}>[직위] [대표자]</Text>
                </View>
            </View>

        </Page>
    </Document>
);

export default MyDocument;
