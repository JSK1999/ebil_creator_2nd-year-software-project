import { Text, View, StyleSheet, Button, TouchableOpacity,Image,ImageBackground,TextInput} from "react-native";
import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';

const headers = ['Item','Description','Qty'];
const rows = [
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'], 
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],
  ['0001','sunlight','20'],
  ['0002','sugar(50kg)','10'],


];


export default function ItemList() {

return(
<ImageBackground source={require('../../assets/bg.png')} >

<View style={styles.viewhead}>
<Text style={styles.heading1}>Daily Item List</Text>
</View>
<View style={styles.table}>
<Table borderStyle={{borderWidth: 2, borderColor: '#000000'}} >
        <Row data={headers}
             flexArr={[1,1,1]}
             textStyle={{textAlign:'center',fontWeight:'bold'}}/>
        <TableWrapper flexDirection='coloum'>
        <Rows data={rows}
        textStyle={{textAlign:'center'}}/>
        </TableWrapper>
      </Table>
</View>

</ImageBackground>
);}

const styles = StyleSheet.create({
   heading1:{
    fontSize: 40,
    paddingBottom:15,
    marginTop:113,
    alignItems: 'center',
   },
   viewhead:{
    alignItems: 'center',
},
table:{
  padding:5,
//   backgroundColor:'blue'
},

})