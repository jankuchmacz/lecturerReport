import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  viewer: {
    width: "80rem",
    height: window.innerHeight,
  },
  body: {
    padding: "10px"
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0,
    marginBottom: "20px" 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol: { 
    width: "12.5%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: "auto", 
    marginTop: 5, 
    fontSize: 10 
  },
  summary: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: "20px" 

  },
  signature: {
    fontSize: 7 
  }
});

// Create Document Component
const MyDocument = (props) => (
<PDFViewer style={styles.viewer}>
    <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.summary}> 
          <Text>Lecturer Report</Text> 
      </View>
      <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Number</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Group Id</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Subject</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Students</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Lectures</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Exercises</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Laboratories</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Total Hours</Text> 
          </View>     
        </View>
        {
          props.groups.map ((group, index)=>{
              return (
                <View style={styles.tableRow}> 
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{index+1}</Text> 
                  </View> 
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{group.name}</Text> 
                  </View> 
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{group.subject}</Text> 
                  </View>
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{group.studentsNumber}</Text> 
                  </View>
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{group.lectures}</Text> 
                  </View> 
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{group.exercises}</Text> 
                  </View> 
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{group.laboratories}</Text> 
                  </View>
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>{group.lectures+group.exercises+group.laboratories}</Text> 
                  </View>  
                </View> 
              );
          })
        }
        
      </View>
      <View style={styles.summary}> 
          <Text>I confirm the completion of the total number of hours: {props.hours}</Text> 
      </View>
      <View style={styles.signature}> 
          <Text>.........................(date and signature)</Text> 
      </View> 
    </Page>
  </Document>
</PDFViewer>
 
);
export default MyDocument;