import React, {useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';

function ListadoScreen({navigation}) {
  return (
    <View style={{
		backgroundColor: '#D66851',
		flex: 1, justifyContent: 'center', alignItems: 'center'}}>
	<ScrollView >
      <Text>La historia del teléfono móvil: Origen, pasado y presente</Text>
      <Text />
	  <Image style={{
		  width:100,
		  height:150,
	  }} source={require('./../images/movil2.png')} />
      <Text>
        Un teléfono móvil es un aparato electrónico compuesto primariamente por
        un receptor y transmisor de señal, que usa la red de telefonía móvil de
        una determinada compañía telefónica para enviar y recibir datos y voz.
        Es habitual que en países Latino-Americanos, sean denominados como
        Celulares, y esto es debido a que el servicio funciona mediante el
        sistema de una red de celdas. La red de celdas es el conjunto de antenas
        repetidoras, donde el espacio que abarca cada una de ellas por separado
        recibe el nombre de célula. La comunicación telefónica móvil es posible
        gracias a la interconexión entre centrales móviles y publicas.
      </Text>
      <Text />
	  <Image style={{
		  width:100,
		  height:150,
	  }} source={require('./../images/movil3.png')} />
      <Text>
        Los primeros teléfonos móviles En un principio, los primeros teléfonos
        móviles o celulares que salieron al mercado, eran dispositivos muy
        aparatosos y pesados, a la vez que estaban al alcance de unos pocos
        privilegiados, ya que su precio era de dimensiones astronómicas. Estos
        gigantescos y pesados terminales, tan solo servían para enviar y recibir
        tanto llamadas como mensajes de texto, aunque en aquella época nadie
        utilizaba el servicio de mensajería del teléfono móvil. su batería daba
        sólo para 1 hora de conversación antes de descargarse. Con 800 gramos de
        peso y unas dimensiones de 33 x 4,5 y 8,9 centímetros era un auténtico
        armatoste que poco tenía de dispositivo móvil
      </Text>
      <Text />
	  <Image style={{
		  width:400,
		  height:150,
	  }} source={require('./../images/historiaMovil.png')} />
      <Text>
        la telefonía móvil a cambiado de manera mas que sustancial, es un
        hecho constatado en el cual caemos sin necesidad de tener que leer
        ningún estudio ni investigación al respecto, tan solo hace falta mirar
        la imagen y el diseño del primer Motorola y compararla con cualquier
        teléfono móvil de última generación que tengamos disponible en el
        mercado tecnológico actual. Si en un principio, los terminales de
        telefonía móvil tan solo nos servían para llamar, recibir llamadas y
        mandar algún que otro mensaje de texto, esto en la actualidad en
        simplemente unas de las pocas funciones incluidas en estos auténticos
        mini-ordenadores de bolsillo. Además de las funciones propias de
        cualquier teléfono convencional, los últimos y mas avanzados modelos de
        telefonía móvil o mejor conocidos como Teléfonos inteligentes o
        Smartphones, nos ofrecen infinidad de servicios y aplicaciones móviles.
        Mas que unos simples teléfonos, son auténticos ordenadores que funcionan
        con sistemas operativos específicos y optimizados según las condiciones
        de cada terminal. Así ademas de la propia antena emisora y receptora de
        señal, los Smartphones de hoy en día vienen equipados con antenas de
        posicionamiento GPS, conectividad WiFi, Capacidad para enviar y recibir
        archivos de manera inalámbrica, tanto por Wifi como por Bluetooth,
        cámaras integradas de gran calidad y resolución, tanto de imagen como de
        video. Los terminales de hoy en día están preparados para permanecer
        conectados tanto a la red de telefonía como a la red de trafico de datos
        e Internet de alta velocidad, de manera totalmente inalámbrica,
        simultanea y de forma permanente, ya que las baterías de última
        generación nos ofrecen una autonomía mas que suficiente para aguantar el
        funcionamiento del dispositivo de manera correcta durante todo el día
        Son capaces de enviar y recibir archivos a través de la red, así como de
        reproducir archivos multimedia ya sean de video o audio, teniendo así
        todo un centro multimedia portátil para llevar con nosotros a cualquier
        lugar y disfrutalos allá donde nos encontremos.
      </Text>
	  <Text/>
	  </ScrollView>
    </View>
  );
}
export default ListadoScreen;
