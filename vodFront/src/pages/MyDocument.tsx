import React from 'react';
import { Document, Text, Page, StyleSheet, View, Font, Image } from '@react-pdf/renderer'; // Image 추가
import notoSansKR from '../assets/fonts/NotoSansKR-Regular.otf';
import MyDocumentTable from "./MyDocumentTable";

// 한글 폰트 등록
Font.register({
    family: 'Noto Sans KR',
    src: notoSansKR,
});

const styles = StyleSheet.create({
    page: {
        marginTop: 30,
        fontSize: 30,
        padding: 20,
        fontFamily: 'Noto Sans KR',
    },
    header: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 36,
    },
    content: {
        fontSize: 16,
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
        fontSize: 16,
        marginBottom: 5
    },
    subText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5
    },
    signatureImage: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        top: 30, // 당신의 필요에 따라 조정해야 할 수 있습니다
    },

});

const MyDocument = () => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.header}>협 약 서</Text>
            <Text style={styles.content}>인공지능산업융합사업단(이하 사업단)과 [기업명](이하 수행기업)은(는) [사업명] 과제를 추진하기 위하여 다음과 같이 협약을 체결한다.</Text>

            <Text style={styles.agreementItem}>□ 협약과제명 : [사업명]</Text>
            <Text style={styles.agreementItem}>□ 협약당사자</Text>
            <Text style={styles.agreementItem}>   · 사업단 : 인공지능산업융합사업단 (단장 김준하)</Text>
            <Text style={styles.agreementItem}>   · 수행기업 : [기업명] (직책 성명)</Text>
            <Text style={styles.agreementItem}>□ 협약기간 : [협약기간]</Text>
            <Text style={styles.agreementItem}>□ 협약금액 : [협약금액]</Text>

            <MyDocumentTable />
            <Text style={styles.subText}>[협약일]2000년 0월 0일</Text>

            <View style={styles.layout}>
                <View style={{flex: 1}}>
                    <Image source="https://images.unsplash.com/photo-1528301721190-186c3bd85418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" style={styles.signatureImage} /> // 여기에 이미지 추가
                    <Text style={styles.underText}>사업단 : 인공지능산업융합사업단</Text>
                    <Text style={styles.underText}>단장 김 준 하</Text>

                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.underText}>수행기관 : [수행기업명]</Text>
                    <Text style={styles.underText}>[직위] [대표자]</Text>
                </View>
            </View>

        </Page>
    </Document>
);

export default MyDocument;
