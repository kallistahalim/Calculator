import React from 'react';
import '../buttons/index.css'

export default function index() {
    return (
        <div>
            <table className="number">
                <tr className="number">
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>+</button></td>
                </tr>
                <tr>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>-</button></td>
                </tr>
                <tr>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>x</button></td>
                </tr>
                <tr>
                    <td><button>C</button></td>
                    <td><button>0</button></td>
                    <td><button>=</button></td>
                    <td><button>/</button></td>
                </tr>
            </table>
        </div>
    )
}
