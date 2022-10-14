#환율

from currency_converter import CurrencyConverter

cc = CurrencyConverter()
print(cc.currencies)        #가지고 올 수 있는 화폐단위 출력

cc = CurrencyConverter('http://www.ecb.europa.eu/stats/eurofxref/eurofxref.zip')
print(cc.convert(1, 'USD', 'KRW'))          #(기준 화폐, 비교 화폐)