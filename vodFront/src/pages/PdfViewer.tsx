// src/NoticePage.js

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import {PDFViewer} from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const PdfViewer = () => {
    const styles = {
        pdfViewer: {
            // position: 'absolute',
            width: '100vw',
            height: '100vh'
        }
    };

    return (
        <div style={{zIndex: 9000, position: "absolute"}}>
        <PDFViewer style={styles.pdfViewer}>
            <MyDocument />
        </PDFViewer>
        </div>
    )
}

export default PdfViewer;
