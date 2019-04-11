self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		self.skipWaiting();
		//	TODO	3.4:	Skip	waiting
		//	syntax diatas adalah sebuah event yang berguna untuk menginstall service worker dan ketika berhasil maka 
		// pada console akan menampilkan output  Service	worker	installing...
});
//	I'm	a	new	service	worker
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});
		//syntax diatas adalah sebuah event untuk mengaktifkan service worker dan ketika berhasil maka 
		// pada console akan menampilkan output  Service	worker	activating...
		
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});
		//syntax diatas adalah sebuah event untuk mengambil data ketika melakukan proses klik pindah
		//dari halaman web lain