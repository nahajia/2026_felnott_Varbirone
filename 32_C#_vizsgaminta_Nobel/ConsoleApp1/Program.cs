using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] fajl = File.ReadAllLines("nobel.csv");
            List<Nobel> nobelLista = new List<Nobel>();
            foreach (var elem in fajl.Skip(1))
            {
                // Console.WriteLine(elem);
                string[] kecske = elem.Split(';');
                nobelLista.Add(new Nobel(int.Parse(kecske[0]), kecske[1], kecske[2], kecske[3]));
            }

            // Console.WriteLine(nobelLista[0].ev);

            //3 feladat
            Console.Write("3. feladat: ");
            var eredmeny3 = nobelLista.Where(x => x.knev == "Arthur B." && x.vnev == "McDonald");
            foreach (var elem in eredmeny3)
            {
                Console.WriteLine(elem.tipus);
            }

      
        
            

            

            Console.ReadKey();
        }
    }
}
