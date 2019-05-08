import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 18,
    width: 200,
    '@media max-width: 400': {
      width: 300,
    },
    '@media orientation: landscape': {
      width: 400,
    },
  }
});

// Create Document Component
const MyDocument = ({text}) => (
  <Document>
    <Page size="A4" style={styles.page}>
        <View style={styles.section}>
        <Text>Devis : { text.title }</Text>
        <Text>N° : { text.id }</Text>
        <Text>Client : { text.customerFirstName } { text.customerLastName }</Text>
        <Text>Articles : </Text>
        { Object.keys(text.items).map((key, index) => (
          <Text key={key}>
          {text.items[key].quantity} &nbsp;
          {text.items[key].description} &nbsp;
          {parseFloat(text.items[key].taxe) * 100.}% &nbsp;
          {text.items[key].amount}€
          </Text>
        )) }
      </View>
    </Page>
  </Document>
);

export const renderPDFInDOM = (text) => {
  const Wrapper = () => (
    <div>
      < PDFViewer >
        <MyDocument text={text}/>
      </PDFViewer>
    </div>
  );
  
  ReactDOM.render(<Wrapper />, document.getElementById('pdf'));
}