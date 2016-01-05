/*
 * Copyright (c) 2015  www.see-r.com
 * All rights reserved
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

_alert = {
    "selectRecord": "Please select a record",
    "createAppDB": "You must first create an application and a database",
    "createApp": "You must first create an application",
    "editNotPermitted": "You can not edit the fields of this schema",
    "loadNotPermittedStep1": "This feature is not allowed for this type of schema",
    "loadNotPermittedStep2": "This feature is not allowed because there are fields in the schema",
    "loadNotPermittedStep3": "This feature is not allowed for this type of schema. Select XML or XMLEXI schema type",
    "fillFields": "Fill in all fields",
    "errorSelectRecord": "Error. Select a record",
    "nameFieldRequired": "The name field is Required",
    "saveOrCancelChanges": "You must save or cancel changes",
    "errorXsdExport": "The XSD cannot be exported",
    "updateRecord": "Record modified successfully",
    "insertTrace": "Enter a datastream to validate",
    "minlengthFieldRequired": "The min length field is required",    
    "maxlengthFieldRequired": "The max length field is required",
    "sizeFieldRequired":"The size field is required",
    "invalidMinLengthField":"Minimum field's value should be greater than zero",
    "invalidMinCompareValue":"Minimum field's value should be less than or equal to max value",
    "invalidMaxLengthField":"Maximum field's value should be greater than or equal to max value",
    "invalidMaxCompareValue":"Maximum field's value should be less than size field's value",
    "minInclusiveFieldRequired": "The min inclusive field is required",    
    "maxInclusiveFieldRequired": "The max inclusive field is required",
    "invalidMinInclusiveField":"Minimum inclusive field's value should be greater than zero",
    "invalidMinInclusiveCompareValue":"Minimum inclusive field's value should be less than max inclusive value",
    "invalidMaxInclusiveCompareValue":"Maximum inclusive field's value should be greater than the min inclusive value",
    "invalidMaxInclusiveSizeValue":"Maximum inclusive field's value should be less than the size field's value",
    "addRecord": "Record added successfully",
    "noStreamData": "Stream can not be saved: no stream data",
    "chooseTree": "Please choose a node of the upper tree",
    "fieldWithoutDbLink" : "Please choose a node that has a link with data base",
    "serverDown" : "Sorry, there are some errors on server side. Probably the server is down. <br/>Please try to reload this page a few moments later.",
    "schemaWithoutLinkedToDbFields" : "Current schema must have at least one field linked to database.",
    "sqlDeleted" : "Sql is deleted from database",
    "sqlSaved" : "Sql is saved to database",
    "selectDBRecord" : "Please select a record from list of database record"
};

_error = {
	"connectionError": "Error connecting to server",
	"invalidFileExtError":"Please select .xsd file",
	"invalidXSDFileError":"Error in parsing xsd file. Please select valid .xsd file",
	"invalidCredentials":"Invalid UserName or Password",
	"invalidCaptcha":"Invalid Captcha",
	"nameExistError":"Name already exist",
	"userNotEnabled":"User not enabled",
	"userNameRequired":"UserName required",
	"emailRequired":"Email required",
	"noRecordFound":"No record found",
	"stringEmptyError":"Please enter string value",
	"valueEmptyError":"Please enter value",
	"errorEmptyError":"Please enter error value",
	"dateEmptyError":"Please enter date value",
	"decimalValueError":"Please enter a valid decimal value",
	"plannedNameError":"Please select planned name",
	"shootDateError":"Please select 'one shot' date",
	"shootTimeError":"Please enter 'one shot' time",
	"delimiterEmptyError":"Please enter delimiter value",
	"schemaEmptyFieldError":"This schema haven't fields",	
	"minuteSelectError":"Please select minute",
	"hourSelectError":"Please select hour",
	"daySelectError":"Please select day",
	"monthSelectError":"Please select month",
	"weekSelectError":"Please select week",
	"dateSelectError":"Please select date",
	"timeError":"Please enter time value",
	"databaseInputError":"Please select input database value",
	"databaseStoreError":"Please select store database value",
	"invalidTimeFormatError":"Invalid Time Format. Please specify time in hh:mm format",
	"serviceDisabledError":"Service is disabled so, you can't download file",
	"everySecondError":"Every Second value must be greater than 0",
	"fileDownloadError":"File doesn't exist on server so, file can't be downloaded",
	"invalidImportFileExtError":"Please select .jv file",
	"descFieldRequired": "The min length of description field is required",
	"regExpFieldRequired": "The Regular Expression field is required",
	"recordEditError": "Selected record can't be edited",
	"recordDeleteError": "Selected record can't be deleted",
	"trimcharEmptyError":"Please enter trim character value",
	"streamValidationRequired":"Please select Custom Stream Validation",
	"streamGenerationRequired":"Please select Stream Generation",
	"applicationRequired":"Please select Application",
	"connectionRequired":"Please select Connections",
	"plannerRequired":"Please select Planner",
	"schemaActivateError":"The schema is not complete and not ready for validation",
	"passwordRequired":"Password required",
	"hostRequired":"Host required",
	"portRequired":"Port required",
	"protocolRequired":"Protocol required",
	"encodingRequired":"Encoding required",
	"smtpstimeoutRequired":"SMTPS Timeout required",
    "invalidLinkFieldError" : "Please select database field to link with schema field",
    "databaseConnectionError": "Database can't be connected so, fields can't be created"
};

_message = { 
    "selectFileValidate" : "Select a File to validate",
	"select": "Select .... ",
    "save": "Save",
    "error": "Error",
    "commitChanges": "You must save or cancel changes",
    "cancel": "Cancel",
    "schemasList": "Schemas list",
    "add": "Add",    
    "delete": "Delete",
    "edit": "Edit",
    "logout": "Logout",
    "help":"Help",
    "ok":"Ok",
    "editFields": "Edit Fields",
    "loadFields": "Load Fields",
    "duplicate": "Duplicate",
    "validateDatastream": "Validate Datastream",
    "validateDatastreamOfSchema": "Validate Datastream of schema ",
    "validateFile": "Validate File",
    "close": "Close",
    "scheme1":"Scheme 1 ",
    "numeric":"Numeric",
    "alphanumeric":"Alphanumeric",
    "decimal":"Decimal",
    "uploadXSD":"Upload XSD",
    "uploadFile":"Upload file",
    "downloadFile":"Download File",
    "validate":"Validate",
    "loadmsg": "Load", 
    "invalid":"Invalid",
    "valid":"Valid",
    "validateSchema":"Validate schema",
    "addRoot":"Add root",
    "addBranch":"Add branch",
    "addLeaf":"Add leaf",
    "addItem": "Add item",
    "all": "All",
    "choice": "Choice",
    "sequence": "Sequence",
    "date": "Date",
    "XSDdate": "XSD Date",
    "notOptional": "Not optional",
    "optional": "Optional",
    "disabled": "Disabled",
    "qualified": "Enabled",
    "left": "Left",
    "right": "Right",
    "integer": "Integer",
    "hour": "Time",
    "dateAndTime": "Date and time",
    "XSDhour": "XSD Time",
    "timestampUnix": "Timestamp unix",
    "XSDdateAndTime": "XSD Date and time",
    "minLength": "Min length",
    "maxLength": "Max length",
    "sizeField": "Size field",
    "minInclusive": "Min inclusive",
    "maxInclusive": "Max inclusive",
    "type": "Type",
    "decimalPlaces": "Decimal places",
    "format": "Format",
    "upload":"Upload",
    "download":"Download",
    "loadTheFile":"Load the file...",
    "validTheFile":"Validate the file...",
    "alignment": "Alignment",
    "fillCharacter": "Fill character",
    "xsdUploadedSuccessfully":"XSD uploaded successfully !",
    "xsdNotUploaded":"XSD not uploaded !",
    "fileNotUploaded":"File not uploaded !",
    "fileUploaded":"File uploaded successfully !",
    "result":"Result :",
    "datastreamReceived": "Datastream received",
    "datastreamReceivedOfSchema": "Datastream received of schema ",
	"applicationHelpMessage": "An application is a container of data streams.<br/>The main feature consists in the fact that the application data streams must conform to the appropriate validity dates.<br/>In this section you can add, edit and delete applications according to your given permissions.",
    "reportsHelpMessage": "The generated reports graphically display the status of data streams and their performance over time.<br/>The following two kinds of information can be obtained:<br/>-validity and number of data streams processed in real time<br/>-validity of data streams pertaining to a given application throughout a specified month.",
    "databaseHelpMessage": "Profiling a database means creating the possibility for the data of an information stream to be recorded within a database.<br/>What in this case is recorded is not the validation result; it is the overall amount of elements comprising the information stream within one or more tables dynamically created by the firewall.<br/>An application does not have database constraints; however, its schema does.<br/>A schema can also not be associated to any Database, but what this also means is that the information stream data will not be recorded.<br/>In this latter case the firewall is used only for analysis and statistics purposes, while in relation to an associated Database the firewall is mainly employed to filter and record information stream data.<br/>Received validation data and data streams remain available for display on 'Schemas->Datastream received'.",
    "schemaHelpMessage": "A fundamental feature offered by the system consists in the possibility of easily creating a structure, which is called data model or schema, that defines the properties of its constituent elements.<br/>The information stream is therefore made of a set of data that conforms to the rules detailed in the schema.<br/>In this section you can edit the schema and all of its fields, test existing schemas, associate existing validation rules or create new ones, duplicate a schema to create a new version of it, as well as viewing the outcomes of all the received data streams and, eventually, send them back to the system.",
    "userHelpMessage": "The system allows access to various functions through roles: <br/> - administrator <br/> - Applications Manager (manages all applications and schemas of competence) <br/> - operator (manages only the schemas of competence) <br/> - dispatcher (send streams in the schemas of competence) <br/> after registering a user must wait the application manager or administrator of the system for enable the assigned role.<br/>",
    "connectionsHelpMessage" : "To access an external system, to get the datastream of one or more files, you need to enter the access info and file info and verify the availability.",
    "plannerHelpMessage" : "The planner let start one or more tasks whenever necessary, without requiring manual intervention.",
    "jobsHelpMessage" : "The job enables the connection according to the times determined in the planner, picks up the requested file and sends it to referenced schema.",
    "adminHelpMessage": "The firewall listens in for data streams coming in from the various kinds of available services.<br/>Activating all of them involves enabling the client to benefit from the best available service for its goals.<br/>Activating only those that are strictly needed means a significant performance gain by not listening in for those services which will never be used.<br/>Deactivating all of them allows for data streams validation only by means of a testing tool accessible via 'Schemas->Validate Datastream'.",
    "version": "<strong>Version </strong>",
    "credits": "<br/>&copy; 2015 foreSEE-Revolution ltd. All rights reserved.<br/>More information at <a href='http://www.see-r.com' target='_blank'>www.see-r.com</a>",
    "refresh": "Refresh",
    "schemaValidationSuccess": "Successful schema validation",
    "success" : "success",
    "fail" : "fail",    
    "schemaDocuments": "Documents",
    "fieldNameNum": "Field Name should not start with number",
    "nameFieldInvalidFormate": "The name field must start with the characters [a..z] or [A..Z] or [_] ",
    "exportSchema": "Export Schema",
    "importSchema": "Import Schema",
    "forgetPasswordMsg": "An email will be sent with new password",
    "captchaNotClear":"Not Clear? Click for new image",
    "successDuplicateSchema": "Schema duplicated successfully",
    "waitMessage": "Please wait...",
	"customErrors": "Custom message errors",
	"macro": "Macro",
	"exportPng" : "Export Image Diagram",
	"optionInEE" : "Function available in<br/><br/><b>Enterprise Edition version</b>",
	"moduleName" : "Open Edition",
	"shareSchema": "Share with the world",
	"sendStream" : "Send stream",
	"noValuesForDisplay" : "No values to display",
    "infoSharing": 'This schema validation will be shared with everyone on the site www.see-r.com ,authorized in advance by the system administrator.<br/>Thanks for participating!',
    "del": "Delete",
    "delMsg": "Do you want to delete",
    "supportedStandard": "Supported standard",
    "addCode": "Add Code",
    "persistenceMsg": "<b>Information taken from persistence.xml</b>",
    "dbConfigError" : "You need to create an emtpy db.<br/><br/> Please edit the persistence.xml file.",
    "successSqlValidation" : "Successful query validation",
    "unsuccessSqlValidation" : "Unsuccessful query validation",
    "clearEditor":"Clear editor",
    "errorTolerance" : "Error tolerance %",
    "test" : "Test",
    "generate" : "Generate",
    "deleteAll" : "Delete All",
    "deleteSelected" : "Delete Selected",
	"dqDuplicate" : "Duplicate",	
	"dqSimilarity" : "Similarity",
	"dqStandardization" : "Standardization",
	"dqReplaceNull" : "Replace Null",
	"dqAnd" : "And (Inclusive)",
	"dqOr" : "Or (Exclusive)",
	"dqMatched" : "Matched",
	"dqUnMatched" : "Unmatched",
	"dqUpperCase" : "UPPER CASE",
	"dqLowerCase" : "lower case",
	"dqTitleCase" : "Title Case",
	"dqSentenceCase" : "Sentence Case",
	"dqDescreteMatch" : "Descrete Match",
	"dqDescreteNoMatch" : "Descrete No Match",
	"dqCardinality" : "Cardinality",
	"dqCardinalityEditable" : "Cardinality Editable",
	"dqTableComparison" : "Table Comparison",
	"dbInfoGeneral" : "General Info",	
	"dbInfoSupport" : "Support Info",
	"dbInfoLimitation" : "Limitation Info",
	"dbInfoFunction" : "Functions Info",
	"dbInfoStdSqlType" : "Standard SQL Type Info",
	"dbInfoUserDefineType" : "User Define Type Info",
	"dbInfoCatalog" : "Catalog Info",
	"dbInfoSchema" : "Schema Info",
	"dbInfoProcedure" : "Procedure Info",
	"dbInfoParameter" : "Parameter Info",
	"dbInfoIndex" : "Index Info",
	"dbInfoTableModel" : "Table Model Info",
	"dbInfoDbMetadata" : "DB Metadata Info",
	"dbInfoTableMetadata" : "Table Metadata Info",
	"dbInfoData" : "Data Info",
	"dbInfoAllTables" : "All Tables Info",
	"dbInfoTable" : "Table Info",
	"dbInfoColumn" : "Column Info",
	"profilerHelp" : "Help",	
	"profilerHelpMessage" : "Click on the relavant database to load the profiler in Profiler -Databases grid",
	"schemaSiteGeneration" : "Site Schema Generation",
	"delRecursiveMsg": "This operation will delete recursively all schemas of",
	"sureMsg": ", are you sure?",
	"schemaCreateField": "Would you like to edit the schema fields?",
	"wizard": "Wizard",
    "forecasting" : "Forecasting"
};

_label = {        
    "customCodeValidation":"Custom Code Validation",
	"triggerValidation":"Trigger Validation",
    "startDate": "Start date",
    "endDate": "End date",
    "database": "Database - Data sharing",
    "name": "Name",
    "application": "Application",
    "streamType": "Datastream type",
    "customValidation": "Custom stream validation",
    "databaseType": "Database type",
    "host": "Host",
    "port": "Port",
    "databaseName": "Database name",
    "userName": "Username",
    "password": "Password",
    "clearEditor":"Clear editor",
    "compile": "Compile",
    "expertMod": "Expert mode",
    "rule": "Rule",
    "javaMetaCode": "Java Meta Code",
    "trackFields": "Track fields",
    "dbTrackFields" : "DB fields",
    "trackField": "Track field",
    "instructions": "Instruction",
    "applications": "Application - Stream container",
    "mainMenu": "Main menu",
    "newValue":"New value",
    "value":"Value",
    "allowedValues":"Allowed value",
    "schema":"Schema",
    "fieldDetail":"Field detail",
    "dateType":"Date type",
    "timeType":"Time type",
    "users": "Users",
    "surname": "Surname",
    "email": "Email",
    "email_config" : "Email config",
    "registrationDate": "Registration date",
    "other": "Other",
    "space": "Space",
    "date" : "Date",
    "time": "Time",
    "checked": "Checked",
    "regularExpression": "Regular expression",
    "extraCheck": "Extra Check",
    "credits_sw": "Open Source Products used",
    "description": "Description",
    "link": "Link",
    "loadDocuments": "Load Documents",
    "regExpStored": "Regular Expression stored", 
    "January": "January",
    "February": "February",
    "March": "March",
    "April": "April",
    "May": "May",
    "June": "June",
    "July": "July",
    "August": "August",
    "September": "September",
    "October": "October",
    "November": "November",
    "December": "December",
    "active": "Active",
    "serverType": "Server type",
    "server": "Servers available" ,
    "scheduler" : "Scheduler",
    "schedulers" : "Schedulers",
    "planner" : "Planner",
    "alert": "Alert",
    "status" : "Status",
    "every" : "Every",
    "tasks" : "Tasks",
    "minute" : "Minute",
    "hour" : "Hour",
    "day" : "Day",
    "month" : "Month",
    "week" : "Week",
    "credits" : "Credits",
    "admin" : "Administration",
    "connections" : "Connections",
	"directory" : "Directory",
	"fileName" : "File name",
	"service" : "Service",
	"jobs" : "Jobs",
	"forgetPassword" : "Forget Password",
	"register":"Register",
	"login":"Login",
	"dob":"Date of birth",
	"securityCode":"Security Code",
	"role":"Role",
    "min":"LESS",
    "max":"GREATER",
    "equal":"EQUAL",
    "language":"Language",
    "enabled":"Enabled",
    "disabled":"Disabled",
	"version":"Version",
	"planned":"Planned",
	"oneShoot":"one shot",
	"inputDatabase": "Database for input",
    "outputDatabase": "Database for output",
	"storeDatabase": "Database for storing",
    "validationDatabase": "Database for validation",
	"contactUs":"Contact Us",
	"send":"Send",
	"firstName":"First Name",
	"lastName":"Last Name",
	"emailAddress":"Email Address",
	"message":"Message",
    "info_service":"Info service",
    "streamLoggingOK":"OK",
    "streamLoggingKO":"Error",
    "streamLoggingWarning":"Warning",
    "downloadConnFile":"Test",
    "everyseconds":"Every Seconds",
    "generationStream":"Stream generation",
    "streamLoadingLabel":"Stream loading",
    "base" : "Base",
    "dataStream" : "Datastream",
    "streamLogging" : "Stream logging",
    "timeWindow" : "Time window",
    "forecasting" : "Forecast",
    "indexing" : "Index",
    "global" : "Global",
    "noHeader" : "No Header",
    "delimiter" : "Delimiter",
    "available" : "Available",
    "speed" : "Speed",
    "accuracy" : "Accuracy",
    "sentDataStream" : "Datastream to be sent",
    "importFile" : "Import File",
    "import" : "Import",
    "db_fields" : "Database fields",
    "maxOccurs" : "maxOccurs",
    "unbounded" : "unbounded",
    "attributes": "Attributes",
    "attributeDetail": "Attribute detail",
    "companyName": "Company name",
    "companyWebsite": "Company website",
    "position": "Role",
    "authorize": "I authorize the use of my personal data.",
    "trimChar" : "Trim char:",
    "linkToDb" : "DB field",
    "standardValidations" : "Standard stream validation",
    "versionLibrary" : "Version Library",
    "queryGeneration" : "Query generation",
    "resultSet" : "Result set",
    "realTime" : "Real Time",
    "monthlyState" : "Monthly State",
    "annualState" : "Annual State",
    "defaultDatabase" : "Default Database",
    "inputDir" : "Input directory",
    "serverPort" : "Server port",
    "outputDir" : "Output directory",
    "ftpConfig" : "FTP Config",
	"linked" : "Linked",
    "trigger" : "Trigger",
    "code":"Code",
    "cleareditor":"Clear editor",
	"validate":"Validate"  ,
    "sendValidation" : "Send to validation",
	"modifyProfile" : "Modify Profile" ,
    "continue": "Continue",
    "editQuery" : "Edit query",
    "validateQuery" : "Validate query",
    "saveQuery" : "Save query",
    "deleteQuery" : "Delete query",
    "connType":"Connection type",
    "deleteLinkToDb" : "Delete link to database",
    "linkToDatabase" : "Link to database",
    "linkToDbSelected" : "DB field selected",
    "monthYear" : "Month of the Year",
    "dayMonth" : "Days of the month",
    "monthStGraph" : "Monthly State Graph",
    "annualStGraph" : "Annual State Graph",
    "realTimeData" : "Real Time Data Load",
    "numDataStream" : "Numbers of Data Stream",
    "currentTimeValidation" : "Current Time",
    "bar" : "Bar",
    "relevance" : "Relevance",
    "warnTolerance" : "Warning tolerance",
    "emailSettings" : "Email settings",
    "protocol" : "Protocol",
    "encoding" : "Encoding",
    "smtpsTimeout" : "SMTPS TIMEOUT",
    "startttls" : "STARTTLS",
    "smtpsAuthenticate" : "SMTPS AUTHENTICATE",
    "ftp" : "FTP",
    "detailedState" : "Detailed State",
    "detailedStGraph" : "Detailed chart in Real Time",
    "dataStreamTitle" : "Data Stream",
    "schemas" : "Schemas",
    "datastreams" : "Datastreams",
    "log" : "Log",
    "id" : "Id",
    "profiler" : "Profiler",
    "dbInfo" : "DataBase Info",    
	"dataQuality" : "Data Quality (Beta)",
	"profilerDatabase" : "Profiler - Databases",
    "websiteAllPage" : "Website URL - all pages",
    "websiteSinglePage" : "Website URL - single page",
    "streamManagement" : "Stream Management",
    "search_desc" : "Search in description",
    "matching_recs" : "Matching records",
    "selectApplications" : "Select Applications",
    "selectImportFile" : "Select a file to import",
    "no_matching_recs" : "No Record Found",
    "significativeLags" : "Significative Lags",
    "maxACatLags" :"Max AC at Lags",
    "maxACValues" : "Max AC Values",
    "mean" : "Mean",
    "count" : "Count",
    "dimension" : "Dimension",
    "sequenceLength" : "Forecasting Sequence Length",
    "ACValue" : "AC Value",
    "fitness" : "Fitness Index",
    "size" : "Size",
    "dataAnalysis" : "Data Analysis",
    "csvFileLabel" : "1. Select a csv data file with the numeric representation of the events to use for forecasting.",
    "eventSpaceEstimation" : "Event Space Estimation",
    "ACFValue" : "ACF Value:",
    "forecastLabel" : "2. Input the number of events to forecast",
    "start" : "Start",
    "remainingElaboration" : "Remaining Elaboration:",
    "forecastedValues" : "FORECASTED VALUES:",
    "noSqlLog" : "NoSQL Log",
    "mongoDB" : "MongoDB"	
};

_button = {
	    "IF": "IF",
	    "ENDIF": "ENDIF",
	    "THEN": "THEN",
	    "AND": "AND",
        "OR": "OR",
        "DIVERSE": "Diverse",
        "EQUAL": "Equal",
        "EMPTY": "Empty",
        "VALUE": "Value",
        "STRING": "String",
        "ERROR": "Error",
        "INSERT" : "INSERT",
        "ADD" : "ADD"
};

_streamType = {
	    "XML": "XML",
	    "XMLEXI": "XML EXI",
	    "flatFileFixedPosition": "Flat File Fixed Position",
	    "flatFileDelimited": "Flat File Delimited",
	    "JSON": "JSON",
		"EXCEL": "MS Excel",
		"HL7" : "HL7",
		"SWIFT" : "SWIFT",
		"EDI_CICA" : "EDI CICA"
};

_eventStatus = {
		"KO":"Error",
		"OK":"Ok",
		"Warning":"Warning"
};
_serviceType = {
	    "FTP": "FTP",
	    "SAMBAWIN": "Samba / Win",
	    "HTTP": "HTTP"
};
_status = {
		"info": "Info",
		"error": "Error",
		"warning": "Warning"
};
_months = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
};

_weekDays = {
	"1" : "Sunday",	
	"2" : "Monday",
	"3" : "Tuesday",
	"4" : "Wednesday",
	"5" : "Thursday",
	"6" : "Friday",
	"7" : "Saturday"
};
_role = {
	"admin": "Administrator",
	"appManager": "Application Manager",
	"operator": "Operator",
	"dispatcher": "Dispatcher",
	"user": "User"
};
_language = {
	"english": "English",
	"italian": "Italian",
    "german" : "German",
    "russian": "Russian"
};

 