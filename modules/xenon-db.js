const low = require("lowdb");
const DosyaSenkronizasyonu = require("lowdb/adapters/FileSync");
const xenon = low(new DosyaSenkronizasyonu("veritabanı.json"));
xenon.defaults({}).write();
module.exports.set = function(i, a) {
  if (i && a) {
    xenon.set(i, a).write();
  } else {
    throw new Error("hata, isim ve ayarlanıcak şeyi belirtmeniz gerek");
  }
};
module.exports.delete = function(i) {
  if (xenon.has(i).value() == true) {
    xenon.unset(i).write();
  } else {
    throw new Error("Silinecek birşey bulamadım");
  }
};
module.exports.has = function(i) {
  return xenon.has(i).value();
};
module.exports.push = function(i, d) {
  if (i && d) {
    if (xenon.has(i).value() == true) {
      xenon
        .get(i)
        .push(d)
        .write();
    } else {
      throw new Error("bulunamayan grup");
    }
  } else {
    throw new Error("hata eklenecek grup yok");
  }
};
module.exports.add = function(i, a) {
  if (i && a) {
    if (xenon.has(i).value() == true) {
      xenon.set(i, xenon.get(i).value() + a).write();
    } else {
      xenon.set(i, xenon.get(i).value()+a).write()
    }
  } else {
    throw new Error("hata eklenecek veri bulunamadı");
  }
};
module.exports.fetch = function(i) {
  if (i) {
    if (xenon.has(i).value() == true) {
      return xenon.get(i).value();
    } else {
      return null
    }
  } else {
    return null
  }
};
