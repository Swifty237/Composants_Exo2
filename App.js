import { StyleSheet, Image, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <View>
          <Image style={styles.picture} source={require('./assets/opportunity.jpg')}/>
        </View>
          <View>
            <Text style={styles.title}>Title: Michael Faraday</Text>
            <Text style={styles.description}>Description: Michael Faraday (Newington, 22 septembre 1791 - Hampton Court, 25 août 1867) est un physicien et un chimiste britannique, connu pour ses travaux fondamentaux dans le domaine de l'électromagnétisme, l'électrochimie, le diamagnétisme, et l'électrolyse.</Text>
          </View>
      </View>

      <View style={styles.box}>
        <View>
          <Image style={styles.picture} source={require('./assets/rover.jpg')}/>
        </View>
        <View>
          <Text style={styles.title}>Title: Nikola TESLA</Text>
          <Text style={styles.description}>Description: Nikola Tesla (en serbe cyrillique : Никола Тесла), né dans la nuit du 9 au 10 juillet 1856 à Smiljan dans l'Empire d'Autriche (actuelle Croatie) et mort le 7 janvier 1943 à New York, est un inventeur et ingénieur américain d'origine serbe. Il est notoirement connu pour son rôle prépondérant dans le développement et l'adoption du courant alternatif pour le transport et la distribution de l'électricité.</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View>
          <Image style={styles.picture} source={require('./assets/spirit.jpg')}/>
        </View>
        <View>
          <Text style={styles.title}>Title: Benjamin Franklin</Text>
          <Text style={styles.description}>Description: Benjamin Franklin /ˈbɛnd͡ʒəmɪn ˈfɹæŋklɪn/1, né le 17 janvier 1706 à Boston et mort le 17 avril 1790 à Philadelphie, est un imprimeur, éditeur, écrivain, naturaliste, inventeur, abolitionniste et homme politique américain.</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  
  box: {
    height: 250,
    flexDirection: "row",
    marginTop: 10
  },

  picture: {
    height: 200,
    width: 200
  },

  title: {
    margin: 10
  },

  description: {
    margin: 10
  }
});
