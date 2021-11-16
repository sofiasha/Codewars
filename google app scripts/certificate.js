function fee_structure() {
	var ss=SpreadsheetApp.openById('1MuYKskx0H6M5nnY2rTeRDmG2T7WgC5XDAsO5ejesMMY');
	var sheet=ss.getSheets()[0];
	var lastR=sheet.getLastRow();
	var clientData=sheet.getRange(lastR,1,1,10).getValues();
	 
	var fio=clientData[0][1];
	var title = clientData[0][2];
	var course = clientData[0][3];
	var spec=clientData[0][4];
	var vid_spravki = clientData[0][9];
	var passp=clientData[0][6];
	Logger.log(fio);
	
	var dirTemp=DriveApp.getFolderById('1cSWPXgxrAlgrg5jGaTORPUan4C5JZ8Yk')
	var template=DriveApp.getFileById('1Hk4oNaGyPIzg7ia6rQ7ISxZNjQ2Z0uTSXOcg-kMbXOk').makeCopy(fio + ' FS',dirTemp).getId();
	var docbody=DocumentApp.openById(template).getBody();
	
	
	var num_spr=SpreadsheetApp.openById('1yuQh3fUOBi6Qj1EW__AzEzhbQvj8l1DDeTxEdaSzfTU');
	var list=num_spr.getSheets()[0];
	var lastR=list.getLastRow();
	var i=list.getRange(lastR,1,1,10).getValues();
	
	var nomer = i[0][0];
	
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	
	today = dd + '/' + mm + '/' + yyyy;
	
	if (spec == 'General medicine'){
	 var sum = 0;
	switch (course) {
	case '1st course/year':
	sum = '400 000';
	break;
	case '2nd course/year':
	sum = '362 950';
	break;
	case '3rd course/year':
	sum = '347 395';
	break;
	case '4th course/year':
	sum = '347 395';
	break;
	case '5th course/year':
	sum = '347 395';
	break;
	case '6th course/year':
	sum = '347 395';
	break;
		}
	}
	if (spec == 'Dentistry'){
	 var sum = 0;
	switch (course) {
	case '1st course/year':
	sum = '420 000';
	break;
	case '2nd course/year':
	sum = '414 800';
	break;
	case '3rd course/year':
	sum = '347 395';
	break;
	case '4th course/year':
	sum = '347 395';
	break;
	case '5th course/year':
	sum = '347 395';
	break;
		}
	}
	if (spec == 'Pharmacy'){
	 var sum = 0;
	switch (course) {
	case '1st course/year':
	sum = '235 000';
	break;
	case '2nd course/year':
	sum = '207 400';
	break;
	case '3rd course/year':
	sum = '207 400';
	break;
	case '4th course/year':
	sum = '207 400';
	break;
	case '5th course/year':
	sum = '207 400';
	break;
		}
	}
	
	docbody.replaceText('Sum', sum);
	docbody.replaceText('SPECIALNOST', spec);
	docbody.replaceText('FIO', fio);
	docbody.replaceText('Title', title);
	docbody.replaceText('Course', course);
	docbody.replaceText('Vidspr', vid_spravki);
	docbody.replaceText('nomer_spravki', nomer);
	docbody.replaceText('Month', today);
	docbody.replaceText('PASSP', passp);
}
	