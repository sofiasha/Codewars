function dop_sogl() {
	var ss=SpreadsheetApp.openById('11SrrfabE5VJTzTJHEgKJQFQY3cVczWqVeqVg5cMXS5g');
	var sheet = SpreadsheetApp.getActive().getSheetByName("2 курс леч");
	var lastR=sheet.getLastRow();
	var clientData=sheet.getDataRange().getValues();
	
	var i = 50;
	while (i < lastR){
	var fio = sheet.getRange(i, 1).getValues();
	var contract = sheet.getRange(i, 2).getValue();
	var date = sheet.getRange(i, 3).getValue();
	
	 
	var dirTemp=DriveApp.getFolderById('1joJ849w1jYiBW5eFg4YCDIfvaUgoC2dn')
	var template=DriveApp.getFileById('1hv_86OaPtO4ZAlTXiswf9IQhqbTg3Z7jxVnIJp8-eqw').makeCopy(contract+ " " + fio,dirTemp).getId();
	var docbody=DocumentApp.openById(template).getBody();
	 
	docbody.replaceText('CONTRACT', contract);
	docbody.replaceText('DATE', date);
	docbody.replaceText('NAME', fio);
	Logger.log(fio);
	i++;
	
	}
}