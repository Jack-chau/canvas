var canvas = document.querySelector( 'canvas' );
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// context
var c = canvas.getContext( '2d' );

// Draw Rectangle
// c.fillRect( x, y, width, height );
c.fillStyle = 'rgba( 255, 0, 0, 0.5)'; //For the color
c.fillRect( 100, 100, 100, 100 );
c.fillStyle = 'rgba( 0, 233, 0 , 0.5 )' ;
c.fillRect( 500, 500, 200, 200 );

// Draw Line
c.beginPath( );
// c.moveTo( x, y );
c.moveTo( 50, 300 );
// c.lineTo( x, y );
c.lineTo( 500, 300 );
c.lineTo( 550, 600 );
c.strokeStyle = '#fa34a3';
// c.stroke To show the line
c.stroke( );

// ARC
/*
c.beginPath( );
// c.arc( x, y, radius, start angle(radians), end angle );
c.arc( 350, 500, 30, 0, Math.PI * 2, false ); //just outline
c.strokeStyle = 'blue';
c.stroke( );
*/

for( var i = 0; i < 3; i++ ) {
    var x = Math.random( ) * window.innerWidth; //random from 0 - 10
    var y = Math.random( ) * window.innerHeight; 
    c.beginPath();
    c.arc( x, y, 30, 0, Math.PI * 2, false ); //just outline
    c.strokeStyle = 'blue';
    c.stroke( );
}