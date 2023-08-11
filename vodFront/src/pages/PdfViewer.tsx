// src/NoticePage.js

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import {PDFViewer} from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const PdfViewer = () => {
    const styles = {
        pdfViewer: {
            width: '100vw',
            height: '100vh'
        }
    };

    return (
        <PDFViewer style={styles.pdfViewer}>
            <MyDocument />
        </PDFViewer>
    )
}

export default PdfViewer;
