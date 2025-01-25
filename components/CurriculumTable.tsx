import type React from "react";

const CurriculumTable: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <table className="w-full text-left font-[family-name:var(--font-rethink)]">
        <thead>
          <tr className="bg-[#022461] text-white">
            <th className="p-2 font-bold">WEEK</th>
            <th className="p-2 font-bold">SUBJECT</th>
            <th className="p-2 font-bold">TOOLS</th>
            <th className="p-2 font-bold">PLACE</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 align-top font-bold" rowSpan={5}>
              1
            </td>
            <td className="p-2 font-bold">ROAD LANGUAGE</td>
            <td className="p-2">High Way code</td>
            <td className="p-2" rowSpan={4}>
              Class room
            </td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2 pl-4">a) Ten basic rules</td>
            <td className="p-2">Chalk and Board</td>
            <td className="p-2"></td>
          </tr>
          <tr>
            <td className="p-2 pl-4">b) Road Signs</td>
            <td className="p-2">RTA No. 11 of 2002</td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2 pl-4">c) Road Markings</td>
            <td className="p-2">Visual Aid Boards</td>
            <td className="p-2"></td>
          </tr>
          <tr>
            <td className="p-2 pl-4">d) Road Etiquette</td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2" colSpan={4}>
              MOCK +
            </td>
            <td className="p-2"></td>
          </tr>
          <tr>
            <td className="p-2" colSpan={4}>
              Student Knowledge
            </td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2"></td>
            <td className="p-2">Start up Procedure</td>
            <td className="p-2">Class/Car</td>
            <td className="p-2">RTSA</td>
          </tr>
          <tr>
            <td className="p-2 align-top font-bold" rowSpan={3}>
              2
            </td>
            <td className="p-2">Introduction to Motor Vehicle and Controls</td>
            <td className="p-2">Board and Chalk</td>
            <td className="p-2">Classroom</td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2">
              Introduction to Motor Vehicle driving and steering
            </td>
            <td className="p-2">Car</td>
            <td className="p-2">Stadium</td>
            <td className="p-2"></td>
          </tr>
          <tr>
            <td className="p-2">Lane Discipline and Edge Lines</td>
            <td className="p-2">Car</td>
            <td className="p-2">Stadium</td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2 align-top font-bold" rowSpan={3}>
              3
            </td>
            <td className="p-2">Gear shifting</td>
            <td className="p-2">Motor Car</td>
            <td className="p-2">Highway</td>
            <td className="p-2"></td>
          </tr>
          <tr>
            <td className="p-2">Obstacle avoidance</td>
            <td className="p-2">Cones</td>
            <td className="p-2">Circuit (FRA)</td>
            <td className="p-2"></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-2">Perfected Road Craft</td>
            <td className="p-2">Motor Car</td>
            <td className="p-2">RTSA</td>
            <td className="p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurriculumTable;
