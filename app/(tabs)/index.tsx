import { Image, StyleSheet, Platform, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ImageBackground source={require('../../assets/images/gweh.jpg')} style={tw`h-110 shadow`} />
          <View style={tw`w-full h-full bg-white rounded-t-[10] bottom-10 p-10`}>
            <Text style={tw`font-extrabold text-4xl w-2/3`}>Farrel Alvidi</Text>
            <View style={tw` flex-row w-3/4 mt-1 gap-5 items-center`}>
              <Text style={tw`text-lg font-semibold text-slate-800`}>Programmer</Text>
              <Text style={tw`text-lg font-semibold text-slate-800`}><Entypo name='location-pin' style={tw`text-lg`} /> Bogor</Text>
            </View>
            <View style={tw`flex-row justify-between mt-8`}>
              <View style={tw``}>
                <Text style={tw` text-center font-black text-2xl`}>11</Text>
                <Text style={tw` text-center text-lg`}>Kelas</Text>
              </View>
              <View style={tw``}>
                <Text style={tw`text-center font-black text-2xl`}>RPL</Text>
                <Text style={tw`text-center text-lg`}>Jurusan</Text>
              </View>
              <View style={tw``}>
                <Text style={tw`text-center font-black text-2xl`}>9</Text>
                <Text style={tw`text-center text-lg`}>Projek</Text>
              </View>
            </View>
            <View>
              <Link href="/other/hire" style={tw`bg-black text-white p-3 rounded mt-6 w-26 font-semibold text-center`}>
                <Text style={tw`bg-black text-white p-3 rounded mt-6 w-26 font-semibold text-center`}>Hire me</Text>
              </Link>
            </View>

            <View style={tw`flex-row w-26 justify-between my-6`}>
              <FontAwesome style={tw`text-xl`} name='facebook' />
              <Entypo style={tw`text-xl`} name='linkedin' />
              <AntDesign style={tw`text-xl`} name='twitter' />
            </View>

            <View>
              <Text style={tw`text-xl font-bold uppercase my-1 `}>Tentang saya</Text>
              <Text style={tw`text-justify`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, dicta nemo recusandae eum laboriosam aut, pariatur iste mollitia, aliquam accusamus debitis. Ex error doloribus dolorem, explicabo libero quod recusandae accusantium!</Text>
            </View>
            <View style={tw`my-6`}>
              <Text style={tw`text-xl font-bold uppercase my-1`}>Projek</Text>
              <Text style={tw `text-justify`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, dicta nemo recusandae eum laboriosam aut, pariatur iste mollitia, aliquam accusamus debitis. Ex error doloribus dolorem, explicabo libero quod recusandae accusantium!</Text>
            </View>
            <View style={tw`my-6`}>
              <Text style={tw`text-xl font-bold uppercase my-1`}>Tools</Text>
              <View style={tw`flex-row justify-between mt-1`}>
                <Text style={tw `font-semibold bg-white p-1 rounded-full px-3 border border-gray-300`}>Figma</Text>
                <Text style={tw `font-semibold bg-white p-1 rounded-full px-3 border border-gray-300`}>Visual Studio Code</Text>
                <Text style={tw `font-semibold bg-white p-1 rounded-full px-3 border border-gray-300`}>Android Studio</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 160,
    width: 160,
    marginBottom: 12,
    borderRadius: 100,
  },
});
