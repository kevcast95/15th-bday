const guests = [
  {
    "invited": "FAMILIA SANZ REALES ",
    "code": "1234",
    "quota": "3"
  },
  {
    "invited": "FAMILIA REALES GUERRA",
    "code": "1235",
    "quota": "2"
  },
  {
    "invited": "FAMILIA MORRON REALES",
    "code": "1236",
    "quota": "4"
  },
  {
    "invited": "FAMILIA REALES TURIZO",
    "code": "1237",
    "quota": "3"
  },
  {
    "invited": "FRANCISCO ARROYO ANDRADE",
    "code": "1238",
    "quota": "1"
  },
  {
    "invited": "FAMILIA ARROYO ANDRADE",
    "code": "1239",
    "quota": "2"
  },
  {
    "invited": "FAMILIA ARROYO OLAVE",
    "code": "1240",
    "quota": "2"
  },
  {
    "invited": "ALFONSO ANDRADE Y SRA",
    "code": "1241",
    "quota": "2"
  },
  {
    "invited": "HECTOR RAFAEL ANDRADE",
    "code": "1242",
    "quota": "1"
  },
  {
    "invited": "FAMILIA ALVAREZ REALES",
    "code": "1243",
    "quota": "2"
  },
  {
    "invited": "FAMILIA CARDENAS ALVAREZ",
    "code": "1244",
    "quota": "2"
  },
  {
    "invited": "FAMILIA RAMIREZ ALVAREZ",
    "code": "1245",
    "quota": "2"
  },
  {
    "invited": "GILMA REALES ",
    "code": "1246",
    "quota": "2"
  },
  {
    "invited": "FAMILIA HERNANDEZ JULIO",
    "code": "1247",
    "quota": "3"
  },
  {
    "invited": "NAPOLEON HERNANDEZ Y SRA",
    "code": "1248",
    "quota": "2"
  },
  {
    "invited": "JESUS HERNANDEZ Y SRA",
    "code": "1249",
    "quota": "2"
  },
  {
    "invited": "FAMILIA ANDRADE LUGO",
    "code": "1250",
    "quota": "2"
  },
  {
    "invited": "AMALIA HERNANDEZ Y FAMILIA",
    "code": "1251",
    "quota": "5"
  },
  {
    "invited": "FAMILIA CORREA HERNANDEZ",
    "code": "1252",
    "quota": "2"
  },
  {
    "invited": "ORLANDO CORREA",
    "code": "1253",
    "quota": "1"
  },
  {
    "invited": "SONIA FLORES ",
    "code": "1254",
    "quota": "1"
  },
  {
    "invited": "LORENA PINTO",
    "code": "1255",
    "quota": "1"
  },
  {
    "invited": "JOAQUIN OROBAJO Y SRA",
    "code": "1256",
    "quota": "2"
  },
  {
    "invited": "FAMILIA GIL MARTINEZ",
    "code": "1257",
    "quota": "3"
  },
  {
    "invited": "AMERICA Y MARIANGEL",
    "code": "1258",
    "quota": "2"
  },
  {
    "invited": "BORIS Y AMANDA",
    "code": "1259",
    "quota": "2"
  },
  {
    "invited": "JAIRO BARCINILLA Y SRA",
    "code": "1260",
    "quota": "2"
  },
  {
    "invited": "FAMILIA RUIZ FERRER",
    "code": "1261",
    "quota": "2"
  },
  {
    "invited": "SUGEY SANTOS",
    "code": "1262",
    "quota": "2"
  },
  {
    "invited": "MARLENE GARCIA",
    "code": "1263",
    "quota": "2"
  },
  {
    "invited": "LUIS MARQUEZ",
    "code": "1264",
    "quota": "1"
  },
  {
    "invited": "CILA BUSTAMANTE",
    "code": "1265",
    "quota": "2"
  },
  {
    "invited": "LUIS DANIEL YANEZ",
    "code": "1266",
    "quota": "1"
  },
  {
    "invited": "AMALIA BUSTAMANTE",
    "code": "1267",
    "quota": "1"
  },
  {
    "invited": "MANUEL GUERRA Y SRA",
    "code": "1268",
    "quota": "2"
  },
  {
    "invited": "RIGOBERTO CASTELLANO Y SRA",
    "code": "1269",
    "quota": "2"
  },
  {
    "invited": "KERLY PADILLA",
    "code": "1270",
    "quota": "2"
  },
  {
    "invited": "KAMILA ANDREA",
    "code": "1271",
    "quota": "1"
  },
  {
    "invited": "CAMILA ANDREA",
    "code": "1272",
    "quota": "1"
  },
  {
    "invited": "LIYEN",
    "code": "1273",
    "quota": "1"
  },
  {
    "invited": "FERNANDA",
    "code": "1274",
    "quota": "1"
  },
  {
    "invited": "VALENTINA",
    "code": "1275",
    "quota": "1"
  },
  {
    "invited": "NICOLL",
    "code": "1276",
    "quota": "1"
  },
  {
    "invited": "ANA GABRIELA Y NICOLAS",
    "code": "1277",
    "quota": "2"
  },
  {
    "invited": "VALERIA ABRIL",
    "code": "1278",
    "quota": "1"
  },
  {
    "invited": "LUCIANA",
    "code": "1279",
    "quota": "1"
  },
  {
    "invited": "ANDREA ",
    "code": "1280",
    "quota": "1"
  },
  {
    "invited": "ANDREA ",
    "code": "1281",
    "quota": "1"
  },
  {
    "invited": "ISABELLA",
    "code": "1282",
    "quota": "1"
  },
  {
    "invited": "MARIA PAZ Y MIGUEL",
    "code": "1283",
    "quota": "1"
  },
  {
    "invited": "EILLEN",
    "code": "1284",
    "quota": "1"
  },
  {
    "invited": "MARIA PAULINA",
    "code": "1285",
    "quota": "1"
  },
  {
    "invited": "MARIA FERNANDA ",
    "code": "1286",
    "quota": "1"
  },
  {
    "invited": "NAYARA",
    "code": "1287",
    "quota": "1"
  },
  {
    "invited": "MELANIE",
    "code": "1288",
    "quota": "1"
  },
  {
    "invited": "GREYS",
    "code": "1289",
    "quota": "1"
  },
  {
    "invited": "LUCIA",
    "code": "1290",
    "quota": "1"
  },
  {
    "invited": "MAICOLL",
    "code": "1291",
    "quota": "1"
  },
  {
    "invited": "DANIEL",
    "code": "1292",
    "quota": "1"
  },
  {
    "invited": "GEYER",
    "code": "1293",
    "quota": "1"
  },
  {
    "invited": "ANGEL",
    "code": "1294",
    "quota": "1"
  },
  {
    "invited": "JONHATTAN",
    "code": "1295",
    "quota": "1"
  },
  {
    "invited": "SAMUEL",
    "code": "1296",
    "quota": "1"
  },
  {
    "invited": "DIEGO",
    "code": "1297",
    "quota": "1"
  },
  {
    "invited": "THOMAS",
    "code": "1298",
    "quota": "1"
  },
  {
    "invited": "MATEO",
    "code": "1299",
    "quota": "1"
  },
  {
    "invited": "SEBASTIAN",
    "code": "1300",
    "quota": "1"
  },
  {
    "invited": "EMANUEL",
    "code": "1301",
    "quota": "1"
  },
  {
    "invited": "DAVID",
    "code": "1302",
    "quota": "1"
  },
  {
    "invited": "SANTIAGO",
    "code": "1303",
    "quota": "1"
  },
  {
    "invited": "SANTIAGO",
    "code": "1304",
    "quota": "1"
  },
  {
    "invited": "CARLOS",
    "code": "1305",
    "quota": "1"
  },
  {
    "invited": "JHONY",
    "code": "1306",
    "quota": "1"
  },
  {
    "invited": "JUAN ANGEL",
    "code": "1307",
    "quota": "1"
  },
  {
    "invited": "JOSE",
    "code": "1308",
    "quota": "1"
  },
  {
    "invited": "RICARDO",
    "code": "1309",
    "quota": "1"
  },
  {
    "invited": "ANDRES",
    "code": "1310",
    "quota": "1"
  },
  {
    "invited": "ANDRES",
    "code": "1311",
    "quota": "1"
  },
  {
    "invited": "CARLOS",
    "code": "1312",
    "quota": "1"
  },
  {
    "invited": "SAMUEL",
    "code": "5465",
    "quota": "1"
  },
  {
    "invited": "JUAN  SEBASTIAN",
    "code": "5466",
    "quota": "1"
  },
  {
    "invited": "WILLIAN",
    "code": "5467",
    "quota": "1"
  },
  {
    "invited": "JEAN FELIPE",
    "code": "5468",
    "quota": "1"
  },
  {
    "invited": "JOEL",
    "code": "5469",
    "quota": "1"
  },
  {
    "invited": "ANGEL",
    "code": "5470",
    "quota": "1"
  },
  {
    "invited": "JAVIER",
    "code": "5471",
    "quota": "1"
  },
  {
    "invited": "JUAN DANIEL",
    "code": "5472",
    "quota": "1"
  },
  {
    "invited": "MANUEL",
    "code": "5473",
    "quota": "1"
  },
  {
    "invited": "GUILLERME SARMIENTO Y SRA",
    "code": "5474",
    "quota": "2"
  },
  {
    "invited": "NATALIA SOLARTE",
    "code": "5475",
    "quota": "2"
  },
  {
    "invited": "FAMILIA ARROYO BARBOSA",
    "code": "5476",
    "quota": "2"
  },
  {
    "invited": "JACKSON PEÑA Y SRA",
    "code": "5477",
    "quota": "2"
  },
  {
    "invited": "FAMILIA ARRIETA PADILLA",
    "code": "5478",
    "quota": "2"
  },
  {
    "invited": "PROFESOR NORIEGA MORA",
    "code": "5479",
    "quota": "2"
  },
  {
    "invited": "MAYRA ALBARRACIN",
    "code": "5480",
    "quota": "1"
  },
  {
    "invited": "FAMILIA TURIZO PALENCIA",
    "code": "5481",
    "quota": "2"
  },
  {
    "invited": "SRA JOSEFA REALES",
    "code": "5482",
    "quota": "1"
  },
  {
    "invited": "IVAN AGUDELO",
    "code": "5483",
    "quota": "1"
  },
  {
    "invited": "YURIBI HERNANDEZ",
    "code": "5484",
    "quota": "1"
  },
  {
    "invited": "MANUEL DE JESÚS",
    "code": "5485",
    "quota": "1"
  },
  {
    "invited": "SUGEY SANTOS",
    "code": "5486",
    "quota": "2"
  },
  {
    "invited": "FAMILIA GIL PEÑATE",
    "code": "5487",
    "quota": "3"
  },
  {
    "invited": "CESAR GOMEZ",
    "code": "5488",
    "quota": "1"
  },
  {
    "invited": "ERICK DONADO",
    "code": "5489",
    "quota": "1"
  },
  {
    "invited": "SRA NORIS CERVANTES",
    "code": "5490",
    "quota": "2"
  },
  {
    "invited": "JUAN DANIEL",
    "code": "5491",
    "quota": "1"
  },
  {
    "invited": "SANTIAGO",
    "code": "5492",
    "quota": "1"
  },
  {
    "invited": "ALEJANDRO",
    "code": "5493",
    "quota": "1"
  },
  {
    "invited": "FABIAN CASTRO",
    "code": "5494",
    "quota": "1"
  },
  {
    "invited": "SRA INGRID CONDE",
    "code": "5495",
    "quota": "1"
  },
  {
    "invited": "SRA CLAUDIA ARCE",
    "code": "5496",
    "quota": "1"
  },
  {
    "invited": "EFRAIN",
    "code": "5497",
    "quota": "1"
  },
  {
    "invited": "SERGIO",
    "code": "5498",
    "quota": "1"
  },
  {
    "invited": "AINER",
    "code": "5499",
    "quota": "1"
  },
  {
    "invited": "SRA NADIA",
    "code": "5500",
    "quota": "2"
  },
  {
    "invited": "SR LUIS ARRIETA Y SRA",
    "code": "5501",
    "quota": "2"
  },
  {
    "invited": "ALEXANDER Y GABRIELA",
    "code": "5502",
    "quota": "2"
  },
  {
    "invited": "CIELO",
    "code": "5503",
    "quota": "1"
  },
  {
    "invited": "DIEGO RICO",
    "code": "5504",
    "quota": "1"
  },
  {
    "invited": "Alicia",
    "code": "5505",
    "quota": "2"
  },
  {
    "invited": "GISELLE PLATA",
    "code": "5506",
    "quota": "1"
  },
]
function validateInvitate() {
  const code = document.getElementById("code").value
  const guest = guests.filter(gst => gst.code === code);
  if (guest.length > 0) {
    localStorage.setItem("code", code);
    localStorage.setItem("invited", JSON.stringify(guest))
    window.location.href = "info.html"
  } else {
    alert("Por favor verificar código")
    return
  }
}

window.onload = function () {
  const pathName = window.location.pathname
  if (pathName.includes("/info.html")) {
    const invitedName = document.getElementById("invited-name")
    const quota = document.getElementById("quota")
    const guest = JSON.parse(localStorage.getItem("invited"))
    invitedName.innerText = guest[0].invited;
    quota.innerText = `CUPO ( S ) : ${guest[0].quota}`
  }
};