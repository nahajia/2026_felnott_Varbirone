using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NetworkHelper;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Locsoloversek> tomb = Backend.GET("http://localhost:3000/locsoloversek").Send().As<List<Locsoloversek>>();

            //Console.WriteLine(tomb[0].cim);
            //1. feladat
            Console.WriteLine("1.feladat: Új locsolóversek:");
            var eredmeny1 = tomb.Where(x => x.keletkezes_ev == 2026).OrderBy(x=>x.cim);
            foreach (var item in eredmeny1)
            {
                Console.WriteLine($"- {item.cim} : {item.vers}");
            }
            //2. feladat
            Console.WriteLine("2. feladat: Évenkénti locsolóversek száma:");
            var eredmeny2 = tomb.GroupBy(x => x.keletkezes_ev).OrderByDescending(x=>x.Key);

            foreach (var item in eredmeny2)
            {
                Console.WriteLine($"{item.Key}.évi locsolóversek: {item.Count()}db " );
            }

            //3. fel
            Console.WriteLine("3.feladat: Keresés");
            Console.Write("Add meg a címben vagy versben keresendő szót: ");
            string bemenet = Console.ReadLine();

            var eredmeny3 = tomb.Where(x => x.cim.ToUpper().Contains(bemenet.ToUpper()) || x.vers.ToUpper().Contains(bemenet.ToUpper()));
            var eredmeny4 = eredmeny3.Count();
            if (eredmeny4==0)
            {
                Console.WriteLine("Nincs találat");
            }
            else
            {
                Console.WriteLine($"{eredmeny4} találat van: ");
                foreach (var item in eredmeny3)
                {
                    Console.WriteLine($"Cím: {item.cim}");
                    Console.WriteLine($"Kedvelések száma: {item.kedvelesek_szama}");
                    Console.WriteLine($"Vers: {item.vers}");
                    Console.WriteLine("-----------------------");
                }
            }

           

            Console.ReadKey();
        }
    }
}
