const fs = require('fs');
let page = fs.readFileSync('src/app/locations/[location]/page.tsx', 'utf8');

// The map section needs to:
// 1. For single-branch: show one map with exact address embed
// 2. For multi-branch: show separate map per branch with its own mapEmbed

const newMapSection = `                        {/* Map Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                              {location.mapPins && location.mapPins.length > 1
                                ? \`Our \${location.mapPins.length} Branches in \${location.name}\`
                                : \`Find Us – \${location.name}\`}
                            </h2>

                            {/* Single branch map */}
                            {(!location.mapPins || location.mapPins.length <= 1) && (
                              <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative" style={{height:"450px"}}>
                                <iframe
                                  src={location.mapEmbed}
                                  className="w-full h-full border-0"
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                  title={\`Legend Physiotherapy \${location.name}\`}
                                />
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-red-100 max-w-xs pointer-events-none">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-bold text-gray-900 text-xs">Legend Physiotherapy – {location.name}</p>
                                      <p className="text-gray-500 text-[10px] leading-tight">{location.address}</p>
                                      <p className="text-blue-600 text-[10px] font-semibold">{location.phone}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Multi-branch: one map per branch */}
                            {location.mapPins && location.mapPins.length > 1 && (
                              <div className="space-y-6">
                                {location.mapPins.map((pin: any, i: number) => (
                                  <div key={i} className="rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                    <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center gap-3">
                                      <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i + 1}</div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-bold text-gray-900 text-sm truncate">{pin.label}</p>
                                        <p className="text-gray-500 text-xs truncate">{pin.address}</p>
                                      </div>
                                      <a href={\`tel:\${pin.phone.replace(/\\s/g,"")}\`} className="text-blue-600 text-xs font-bold hover:underline flex-shrink-0">{pin.phone}</a>
                                    </div>
                                    <div className="relative" style={{height:"380px"}}>
                                      <iframe
                                        src={pin.mapEmbed || location.mapEmbed}
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={pin.label}
                                      />
                                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-xl border border-red-100 pointer-events-none">
                                        <div className="flex items-center gap-2">
                                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold">{i+1}</div>
                                          <div>
                                            <p className="font-bold text-gray-900 text-[10px]">{pin.label}</p>
                                            <p className="text-blue-600 text-[10px] font-semibold">{pin.phone}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                        </section>`;

// Find and replace the map section
const mapStart = page.indexOf('                        {/* Map Section */}');
const mapEnd = page.indexOf('                        {/* Conditions Section */}');

if (mapStart === -1 || mapEnd === -1) {
  console.log('Map section markers not found!');
  console.log('mapStart:', mapStart, 'mapEnd:', mapEnd);
  process.exit(1);
}

page = page.substring(0, mapStart) + newMapSection + '\n\n' + page.substring(mapEnd);
fs.writeFileSync('src/app/locations/[location]/page.tsx', page);
console.log('Map section replaced successfully');
console.log('New length:', page.length);
