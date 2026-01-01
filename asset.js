 const toggleBtn = document.getElementById('desktopToggleBtn');
    const sidebar = document.getElementById('sidebarDesktop');
    const mainContent = document.getElementById('mainContent');
    const allLinks = document.querySelectorAll('a[data-id]');
    const judulNavbar = document.getElementById('judulNavbar');
	 const mdata = document.getElementById('data');
     	 const mload = document.getElementById('load');
		 
    toggleBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-collapsed');
      mainContent.classList.toggle('with-sidebar');
      mainContent.classList.toggle('without-sidebar');
    });

    function setupCollapseArrow(id, arrowId) {
	 
      const submenu = document.getElementById(id);
	   
      const arrow = document.getElementById(arrowId);
      submenu?.addEventListener('show.bs.collapse', () => arrow?.classList.add('rotate-90'));
      submenu?.addEventListener('hide.bs.collapse', () => arrow?.classList.remove('rotate-90'));
    }

  
    setupCollapseArrow('submenuMobileAkademik', 'arrowMobileAkademik');
	 setupCollapseArrow('submenuMobilePenilaian', 'arrowMobilePenilaian');
	  setupCollapseArrow('submenuAkademik', 'arrowAkademik');
   setupCollapseArrow('submenuPenilaian', 'arrowPenilaian');
    setupCollapseArrow('submenuMobilePenilaian2', 'arrowMobilePenilaian2');
 setupCollapseArrow('submenuPenilaian2', 'arrowPenilaian2');


   
let icon="";
    function setActiveMenu(id) {
	
      allLinks.forEach(l => l.classList.remove('active'));
      const matchingLinks = Array.from(allLinks).filter(l => l.dataset.id === id);
      matchingLinks.forEach(link => {
        link.classList.add('active');
        const collapse = link.closest('.collapse');
        if (collapse && !collapse.classList.contains('show')) {
          new bootstrap.Collapse(collapse, { toggle: false }).show();
        }
		icon=(link.querySelector('i').getAttribute('class'));
      });
      judulNavbar.innerHTML ="<i class='"+icon+"'></i>"+ id;
    }

    const activeId = localStorage.getItem('menuAktif');
    if (activeId) setActiveMenu(activeId);

    allLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.dataset.id;
        localStorage.setItem('menuAktif', id);
	 //  localStorage.removeItem('menuAktif');
   
        setActiveMenu(id);

        if (window.innerWidth < 768) {
          const offcanvasEl = document.querySelector('#sidebarMobile');
          const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
          offcanvas?.hide();
        }
		mdata.innerHTML="";
        mload.style.display="block";
        mload.innerHTML = `
          <div class="container text-center py-5 fade-in">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-3">Memuat data <strong>${id}</strong>...</p>
          </div>
        `;
		let code=""
		   
		let blink="https://app.smpn9sinjai.sch.id/menu/"
		if(id=='Data Guru'){code='guru'}
		if(id=='Data Siswa'){code='siswa'}
		if(id=='Nilai Semester'){code='nilaisiswa2'}
		if(id=='Link Pengetikan Soal'){code='linksoal'}
		if(id=='Cek Nilai SAS'){code='ceknilaisas'}
		if(id=='Aktifkan Mapel ujian'){code='aktifujian'}  
		if(id=='Disdik US 2025'){code='us2025'}
		if(id=='pengumuman'){code='pengumuman'}
		if(id=='Dashboard'){code='nom'}
	        if(id=='Terdaftar DTKS'){code='spmbdtks'}
	         if(id=='Tidak Terdaftar DTKS'){code='spmbnondtks'}
	          if(id=='chromebook'){code='chromebook'}
		   if(id=='srtmasuk'){code='srtmasuk'}
		  if(id=='Dokumentasi'){code='dokumentasi'}
		 if(id=='Update Dokumentasi'){code='inputdokumentasi'} 
		   if(id=='Update Aset'){code='inputaset'} 
		   if(id=='Update PIP'){code='inputpip'} 
		    if(id=='Laporan'){code='laporan';blink='https://app.smpn9sinjai.sch.id/'}
		   
		 
		if (code=='nom'){
		setTimeout(() => {
		 mdata.innerHTML="";
        mload.style.display="none";
		mdata.style.display="block";
		 mdata.innerHTML=' <div style="margin-top:160px"><center><div class="welcome-container"><img  src="smp.jpg"/></div><div class="welcome-text">Selamat Datang di <br>UPTD SMP Negeri 9 SINJAI</div> <div class="copyright">&copy;2025 By Admin</div><br><br></p><p id="motivasi"></p></center></div>';tampilkanMotivasi()
	 },1000)
	     }
		 else
		 {
            mdata.innerHTML="<iframe  id='iff' style='width: 100%; height: 100%; border: none;' onload='gos()' src='"+blink+code+"'></iframe>"		
		}
		 
         
		
		
		
		
		
     //   setTimeout(() => {
       //   mainContent.innerHTML = `
         //   <div class="container text-center py-5 fade-in">
           //   <div class="judul-halaman">${id}</div>
             // <h3 class="text-success mt-3">Loading sukses: <strong>${id}</strong></h3>
          //  </div>
         // `;
       // }, 2000);
      });
    });


function gos(){
mload.innerHTML="";
mload.style.display="none"
mdata.style.display="block"
document.getElementById("iff").style.visibility="visible"
}
judulNavbar.innerHTML ='<i class="fas fa-home me-2 icon-spacing"></i><span>Dashboard</span>'
const motivasiKerja = [
  "Kerja keras hari ini adalah investasi untuk masa depan.",
  "Jangan menunggu motivasi datang, bergeraklah maka semangat akan mengikuti.",
  "Kesuksesan tidak datang dari zona nyaman.",
  "Setiap langkah kecil mendekatkanmu pada tujuan besar.",
  "Kegagalan bukan akhir, tapi bagian dari proses belajar.",
  "Kerja cerdas lebih penting dari kerja keras saja.",
  "Fokus pada solusi, bukan pada masalah.",
  "Jadilah versi terbaik dirimu hari ini.",
  "Tanggung jawab hari ini adalah jembatan untuk keberhasilan esok.",
  "Lakukan yang terbaik, hasil akan mengikuti.",
  "Semangat pagi adalah kunci produktivitas seharian.",
  "Kedisiplinan adalah fondasi dari sukses.",
  "Keberhasilan dimulai dari niat dan aksi nyata.",
  "Bangun pagi, bangun mimpi.",
  "Setiap detik di tempat kerja adalah peluang untuk berkembang.",
  "Kerja adalah bentuk ibadah jika dilakukan dengan ikhlas.",
  "Kerja tim yang baik akan mengalahkan kerja individu yang hebat.",
  "Belajar dari kesalahan adalah cara menjadi lebih baik.",
  "Setiap pekerjaan adalah tangga menuju keberhasilan.",
  "Jangan tunda pekerjaan, tunda kemalasan.",
  "Kerja keras akan membuahkan hasil yang manis.",
  "Jangan lelah berproses, hasil tak akan mengkhianati usaha.",
  "Jadilah pembawa solusi di tempat kerja.",
  "Kesabaran dan konsistensi adalah kekuatan luar biasa.",
  "Teruslah melangkah meski perlahan.",
  "Bekerja dengan hati akan memberi hasil yang berarti.",
  "Mulailah hari dengan niat baik dan tekad kuat.",
  "Waktu adalah aset terpenting dalam bekerja.",
  "Setiap pekerjaan yang baik adalah ibadah.",
  "Jangan takut mencoba hal baru di tempat kerja.",
  "Pekerjaanmu adalah representasi dari dirimu.",
  "Semangat dan integritas akan membuka pintu keberhasilan.",
  "Kreativitas membuat pekerjaan lebih menyenangkan.",
  "Bekerjalah bukan hanya untuk gaji, tapi juga untuk nilai diri.",
  "Bersyukur membuat kita lebih semangat bekerja.",
  "Jangan bandingkan dirimu dengan orang lain, fokus pada progresmu.",
  "Keberhasilan butuh waktu, teruslah bekerja.",
  "Kerja yang konsisten menghasilkan karya besar.",
  "Motivasi datang dari tujuan yang jelas.",
  "Produktivitas datang dari rencana yang matang.",
  "Kepuasan kerja datang dari kontribusi nyata.",
  "Jangan tunggu kesempatan, ciptakan kesempatan.",
  "Mimpi besar butuh kerja besar.",
  "Bekerjalah dengan visi, bukan hanya rutinitas.",
  "Tantangan di tempat kerja mengasah mental pemenang.",
  "Keikhlasan membuat pekerjaan terasa ringan.",
  "Kerja hari ini adalah harapan untuk keluarga.",
  "Setiap tugas adalah peluang untuk berkembang.",
  "Bekerjalah seolah kau sedang membangun masa depanmu.",
  "Tujuan tanpa kerja hanyalah harapan kosong.",
  "Kerja cermat lebih baik daripada kerja cepat.",
  "Disiplin harian adalah penentu masa depan.",
  "Evaluasi dirimu, perbaiki, dan terus maju.",
  "Lakukan hal kecil dengan sepenuh hati.",
  "Kerja adalah tempat belajar tentang kehidupan.",
  "Jadilah orang yang memberi nilai, bukan hanya menerima.",
  "Bangun karakter kerja yang tangguh.",
  "Terus upgrade dirimu setiap hari.",
  "Kerja bukan beban, tapi kesempatan berkontribusi.",
  "Rezeki datang pada mereka yang tekun bekerja.",
  "Senyum di tempat kerja adalah awal dari kolaborasi baik.",
  "Tempat kerja adalah ladang untuk menabur kebaikan.",
  "Bekerja dengan hati menciptakan hasil luar biasa.",
  "Perubahan besar dimulai dari tindakan kecil.",
  "Jangan takut gagal, takutlah tidak mencoba.",
  "Setiap pekerjaan punya nilai jika dikerjakan dengan benar.",
  "Kejujuran dalam bekerja adalah harga diri.",
  "Bekerjalah seolah kamu sedang belajar, bukan sekadar menyelesaikan.",
  "Tepati waktu, karena waktu tidak bisa kembali.",
  "Orang sukses bukan yang pintar, tapi yang gigih.",
  "Komitmen adalah pondasi profesionalisme.",
  "Bekerja dengan tekun adalah bentuk rasa syukur.",
  "Bekerjalah seolah tidak ada batas keberhasilan.",
  "Bersikap positif di tempat kerja menginspirasi banyak orang.",
  "Keberhasilan bukan tentang siapa yang tercepat, tapi siapa yang paling konsisten.",
  "Tidak ada pekerjaan remeh, semua berharga jika dilakukan dengan benar.",
  "Bergerak lebih baik daripada diam.",
  "Kegagalan bukan alasan untuk berhenti, tapi alasan untuk belajar.",
  "Setiap pagi adalah kesempatan baru untuk jadi lebih baik.",
  "Jangan cari alasan, carilah solusi.",
  "Bekerjalah dengan rasa tanggung jawab yang tinggi.",
  "Lelah bekerja akan terbayar oleh keberhasilan nanti.",
  "Tetap tenang dalam tekanan adalah tanda kedewasaan.",
  "Hindari drama, fokus pada kinerja.",
  "Semangat kerja membangun reputasi.",
  "Bekerja keras sekarang untuk hidup lebih baik nanti.",
  "Kualitas kerja mencerminkan kualitas pribadi.",
  "Tempat kerja adalah ruang aktualisasi diri.",
  "Belajar dari atasan dan rekan kerjamu.",
  "Jangan hanya jadi pekerja, jadilah pencipta perubahan.",
  "Tekun, sabar, dan terus melangkah.",
  "Bangun kerja sama, bukan persaingan tidak sehat.",
  "Semangat tidak perlu alasan, cukup ingat tujuan.",
  "Wujudkan mimpi lewat kerja nyata.",
  "Integritas lebih mahal dari skill.",
  "Kinerja hari ini adalah jejak masa depanmu.",
  "Hasil baik datang dari proses yang benar.",
  "Kerja dengan strategi, bukan asal-asalan.",
  "Fokus, niat, dan doa adalah bekal utama.",
  "Pekerjaan yang baik memberi manfaat luas.",
  "Cintai pekerjaanmu, maka kamu akan bahagia menjalaninya."
]
function ambilMotivasiAcak() {
    const index = Math.floor(Math.random() * motivasiKerja.length);
    return motivasiKerja[index];
  }
tampilkanMotivasi();
  function tampilkanMotivasi() {
    const motivasi = ambilMotivasiAcak();
    document.getElementById("motivasi").textContent = '"'+motivasi+'"';
  }
