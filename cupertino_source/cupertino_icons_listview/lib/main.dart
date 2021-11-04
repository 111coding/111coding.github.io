import 'package:cupertino_icons_listview/iicon.dart';
import 'package:flutter/material.dart';

Future<void> main() async {
  runApp(const MyApp('Printing Demo'));
}

class MyApp extends StatelessWidget {
  const MyApp(this.title, {Key? key}) : super(key: key);

  final String title;

  final backgroundColor = const Color(0xFFFFFFFF);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          toolbarHeight: 0,
          backgroundColor: backgroundColor,
          elevation: 0,
        ),
        body: ListView(
          children: MyCupertinoIcons.temp.entries
              .map((e) => Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 16, vertical: 10),
                    child: SizedBox(
                      width: double.infinity,
                      child: Column(
                        children: [
                          Row(
                            children: [
                              Icon(e.value),
                              const SizedBox(width: 20),
                              SelectableText(
                                "${e.key}",
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 20),
                          Container(
                            width: double.infinity,
                            height: 1,
                            color: const Color(0xFFEEEEEE),
                          ),
                        ],
                      ),
                    ),
                  ))
              .toList(),
        ),
      ),
    );
  }
}
