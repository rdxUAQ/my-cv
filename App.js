import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView, Image, Button} from 'react-native';

const profile = require("./assets/profile.jpeg");

const CenteredScrollView = () => {
  
  return (

    <LinearGradient colors={['#4E4FEB', '#000000']}

    style={styles.background}>
      <View style = {styles.container}>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          
          <View styles={styles.title}>
            <Text style={styles.titleText}>
                {'Gabriel Morales Torres'}
            </Text>
          </View>

          <View style={styles.userData}>

            <Image style={styles.profileImg}
            source = {profile}
            />
            <Text style={styles.contactText}>
              {'20 años \nNacionalidad Mexicana. \nMarzo 25 2003.\nTecnico en Programacion'}
            </Text>
          </View>
          
          <View style={styles.infoView}>
          <Text style={styles.infoViewText}>
              {'CONTACTO \n+52(442)5060671 \ngabresh25@lgmail.com\nBlvd. Paseo Querétaro #2306, '+
              '\nColonia Paseo de San Miguel Querétaro Qro. C.P. 76118.'}
            </Text>
            </View>

            <View style={styles.infoView}>
            
            <Button title='Linkedin' />
            <Button title='Github' />
            </View>

            <View style={styles.infoView}>
            <Text style={styles.infoViewText}>
              {'CONOCIMIENTOS.\n \n• POO \n• Java, C#, PHP. '+
              'R basico. \n• DDL y DML SQL.\n• Uso basico de GitHub. \n\nMetodologias: \n• SCRUM, \n• AGILE.'}
            </Text>

             <Text style={styles.skillViewText}>
              {'HABILIDADES.\n\n• Pro activo. \n• Capacidad de trabajo \n  en equipo. \n• Adaptable. \n• Resolución de problemas. '+
            '\n• Fuerte deseo de expandir \n  conocimientos.\n• Mantenimiento equipos\n de cómputo.\n\nIdiomas:'+
            '\n• Ingles medio-alto'}</Text>
          </View>

          <View style={styles.infoView}>
          <Text style={styles.infoViewText}>
              {'PERFIL PERSONAL.\n\nEstudiante de sexto semestre en ingeniera en software,'+
              ' con conocimiento basico en desarrollo, programación orientada a objetos, '+
              'sentencias SQL DDL y DML, instalación y mantenimiento de equipos de cómputo. Con deseos de aprender en elarea.'}
              </Text>
          </View>


          <View style={styles.infoView}>

          <Text style={styles.infoViewText}>
              {'EDUCACIÓN ACADÉMICA.\n\nTécnico en Programación.\nColegio de Estudios Científicos Y Tecnológicos del estado de Querétaro (2018-2021).\n \n'+
              'Ingeniera de software. \nUniversidad Autónoma De Querétaro (2021-Actualmente).'}
          </Text>

          </View>


          
          

         

          


          
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({

  container: {
  
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  scrollViewContent: {
    alignItems: 'center',
  },

  title:{
    
    flex: 1,
    flexDirection: 'column',
  },
  titleText:{
    color: '#EEEEEE',
    fontSize: 32,
    paddingTop:55
  },



  userData:{
    flex: 1,
    flexDirection: 'row',
    padding: 13,
  },
  profileImg:{
    borderRadius: 150,
    height: 128,
    padding: 10,
    width: 128, 
  },
  contactText:{
    color: '#EEEEEE',
    paddingLeft: 13,
    paddingTop: 13,
  },


  infoView:{
    
    justifyContent: 'flex-start',
    padding:13,
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  skillViewText:{
    color: '#EEEEEE',
    padding: 21,
    paddingLeft: 8

  },
  infoViewText:{
    color: '#EEEEEE',
    padding: 0,
   
    
  }
});

export default CenteredScrollView;